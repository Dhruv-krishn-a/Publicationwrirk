import React from 'react';
import ClientPage from './ClientPage';
import { getContentData } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function Page() {
  // Fetch from Supabase with local fallback
  const content = await getContentData();

  if (!content) {
    return <div className="p-10 text-white">Error loading site content.</div>;
  }

  return <ClientPage initialContent={content} />;
}
