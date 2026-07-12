import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define paths
const CONTENT_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'content.json');
const VERSIONS_DIR = path.join(process.cwd(), 'src', 'data', 'versions');

// Ensure directories exist
function ensureDirs() {
  if (!fs.existsSync(VERSIONS_DIR)) {
    fs.mkdirSync(VERSIONS_DIR, { recursive: true });
  }
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const action = url.searchParams.get('action');

    ensureDirs();

    // If requesting version history
    if (action === 'history') {
      
      const files = fs.readdirSync(VERSIONS_DIR)
        .filter(file => file.endsWith('.json'))
        .sort((a, b) => {
          const timeA = parseInt(a.replace(/\D/g, '')) || 0;
          const timeB = parseInt(b.replace(/\D/g, '')) || 0;
          return timeB - timeA;
        });
        
      const versionsWithMeta = files.map(file => {
        try {
          const fileData = fs.readFileSync(path.join(VERSIONS_DIR, file), 'utf8');
          const parsed = JSON.parse(fileData);
          const timestamp = parseInt(file.replace(/\D/g, '')) || Date.now();
          return {
            filename: file,
            description: parsed._versionMetadata?.description || 'No description provided',
            timestamp: parsed._versionMetadata?.timestamp || timestamp
          };
        } catch(e) {
          const timestamp = parseInt(file.replace(/\D/g, '')) || Date.now();
          return { filename: file, description: 'Unknown', timestamp };
        }
      });

      return NextResponse.json({ success: true, versions: versionsWithMeta });

    }

    // Default: GET current content
    if (!fs.existsSync(CONTENT_FILE_PATH)) {
      return NextResponse.json({ success: false, message: 'Content file not found' }, { status: 404 });
    }

    const fileContents = fs.readFileSync(CONTENT_FILE_PATH, 'utf8');
    return NextResponse.json({ success: true, data: JSON.parse(fileContents) });

  } catch (error) {
    console.error('API Error (GET content):', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch content' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    ensureDirs();
    const body = await req.json();
    const { action, payload, versionFile, description } = body;

    // Save new content
    if (action === 'save') {
      if (!payload) {
        return NextResponse.json({ success: false, message: 'No payload provided' }, { status: 400 });
      }

      // Step 1: Add version metadata to the new payload
      const timestamp = Date.now();
      if (payload) {
        payload._versionMetadata = {
          description: description || 'Manual save from Admin Panel',
          timestamp: timestamp
        };
      }
      
      // Step 2: Save the new payload as a version backup so it appears in history
      const backupPath = path.join(VERSIONS_DIR, `content_${timestamp}.json`);
      fs.writeFileSync(backupPath, JSON.stringify(payload, null, 2), 'utf8');

      // Step 3: Write new payload to active content file
      fs.writeFileSync(CONTENT_FILE_PATH, JSON.stringify(payload, null, 2), 'utf8');

      return NextResponse.json({ success: true, message: 'Content saved successfully with backup created.' });
    }

    // Restore a previous version
    if (action === 'restore') {
      if (!versionFile) {
        return NextResponse.json({ success: false, message: 'No version file specified' }, { status: 400 });
      }

      const versionPath = path.join(VERSIONS_DIR, versionFile);
      if (!fs.existsSync(versionPath)) {
        return NextResponse.json({ success: false, message: 'Version not found' }, { status: 404 });
      }

      // Read the version data
      const versionData = fs.readFileSync(versionPath, 'utf8');

      // Backup the CURRENT state before restoring, just in case!
      if (fs.existsSync(CONTENT_FILE_PATH)) {
        const currentData = fs.readFileSync(CONTENT_FILE_PATH, 'utf8');
        const timestamp = Date.now();
        const backupPath = path.join(VERSIONS_DIR, `content_prerestore_${timestamp}.json`);
        fs.writeFileSync(backupPath, currentData, 'utf8');
      }

      // Overwrite current content with restored version
      fs.writeFileSync(CONTENT_FILE_PATH, versionData, 'utf8');

      return NextResponse.json({ success: true, message: `Successfully restored version: ${versionFile}` });
    }

    return NextResponse.json({ success: false, message: 'Invalid action' }, { status: 400 });

  } catch (error) {
    console.error('API Error (POST content):', error);
    return NextResponse.json({ success: false, message: 'Server error while modifying content' }, { status: 500 });
  }
}
