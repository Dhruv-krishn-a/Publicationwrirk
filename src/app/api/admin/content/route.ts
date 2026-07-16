import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { getContentData, saveContentData, getVersions, getVersionData, saveVersion, deleteVersion } from '@/lib/db';

const CONTENT_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'content.json');
const VERSIONS_DIR = path.join(process.cwd(), 'src', 'data', 'versions');

// Silent local write (won't crash on Vercel)
function silentWriteFile(filePath: string, data: string) {
  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, data, 'utf8');
  } catch (e) {
    // Ignore error for serverless environments
  }
}

function silentUnlinkFile(filePath: string) {
  try {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  } catch (e) {
    // Ignore error for serverless environments
  }
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const action = url.searchParams.get('action');

    // If requesting version history
    if (action === 'history') {
      const dbVersions = await getVersions();
      if (dbVersions) {
        return NextResponse.json({ success: true, versions: dbVersions });
      }

      // Local fallback
      try {
        if (fs.existsSync(VERSIONS_DIR)) {
          const files = fs.readdirSync(VERSIONS_DIR)
            .filter(file => file.endsWith('.json'))
            .sort((a, b) => {
              const timeA = parseInt(a.replace(/\\D/g, '')) || 0;
              const timeB = parseInt(b.replace(/\\D/g, '')) || 0;
              return timeB - timeA;
            });
            
          const versionsWithMeta = files.map(file => {
            try {
              const fileData = fs.readFileSync(path.join(VERSIONS_DIR, file), 'utf8');
              const parsed = JSON.parse(fileData);
              const timestamp = parseInt(file.replace(/\\D/g, '')) || Date.now();
              return {
                filename: file,
                description: parsed._versionMetadata?.description || 'No description provided',
                timestamp: parsed._versionMetadata?.timestamp || timestamp
              };
            } catch(e) {
              const timestamp = parseInt(file.replace(/\\D/g, '')) || Date.now();
              return { filename: file, description: 'Unknown', timestamp };
            }
          });
          return NextResponse.json({ success: true, versions: versionsWithMeta });
        }
      } catch (e) {}
      
      return NextResponse.json({ success: true, versions: [] });
    }

    // Default: GET current content
    const data = await getContentData();
    if (!data) {
      return NextResponse.json({ success: false, message: 'Content file not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('API Error (GET content):', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch content' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, payload, versionFile, description } = body;

    // Save new content
    if (action === 'save') {
      if (!payload) return NextResponse.json({ success: false, message: 'No payload provided' }, { status: 400 });

      const timestamp = Date.now();
      const desc = description || 'Manual save from Admin Panel';
      
      if (payload) {
        payload._versionMetadata = { description: desc, timestamp: timestamp };
      }
      
      // Save to Supabase (Active + Version History)
      const dbSuccess = await saveContentData(payload);
      const versionId = `content_${timestamp}.json`;
      await saveVersion(versionId, desc, timestamp, payload);

      // Local fallback
      silentWriteFile(path.join(VERSIONS_DIR, versionId), JSON.stringify(payload, null, 2));
      silentWriteFile(CONTENT_FILE_PATH, JSON.stringify(payload, null, 2));

      return NextResponse.json({ success: true, message: dbSuccess ? 'Content saved successfully.' : 'Saved to local fallback (Supabase update failed).' });
    }

    // Restore a previous version
    if (action === 'restore') {
      if (!versionFile) return NextResponse.json({ success: false, message: 'No version file specified' }, { status: 400 });

      let versionData = await getVersionData(versionFile);
      
      // Fallback local fetch
      if (!versionData) {
        const versionPath = path.join(VERSIONS_DIR, versionFile);
        if (fs.existsSync(versionPath)) {
          versionData = JSON.parse(fs.readFileSync(versionPath, 'utf8'));
        }
      }

      if (!versionData) return NextResponse.json({ success: false, message: 'Version not found' }, { status: 404 });

      // Backup CURRENT state
      const currentData = await getContentData();
      if (currentData) {
        const timestamp = Date.now();
        const prerestoreId = `content_prerestore_${timestamp}.json`;
        await saveVersion(prerestoreId, 'Auto-backup before restore', timestamp, currentData);
        silentWriteFile(path.join(VERSIONS_DIR, prerestoreId), JSON.stringify(currentData, null, 2));
      }

      // Overwrite current content
      await saveContentData(versionData);
      silentWriteFile(CONTENT_FILE_PATH, JSON.stringify(versionData, null, 2));

      return NextResponse.json({ success: true, message: `Successfully restored version: ${versionFile}` });
    }

    // Delete a previous version
    if (action === 'delete') {
      if (!versionFile) return NextResponse.json({ success: false, message: 'No version file specified' }, { status: 400 });

      await deleteVersion(versionFile);
      silentUnlinkFile(path.join(VERSIONS_DIR, versionFile));

      return NextResponse.json({ success: true, message: `Successfully deleted version: ${versionFile}` });
    }

    return NextResponse.json({ success: false, message: 'Invalid action' }, { status: 400 });

  } catch (error) {
    console.error('API Error (POST content):', error);
    return NextResponse.json({ success: false, message: 'Server error while modifying content' }, { status: 500 });
  }
}
