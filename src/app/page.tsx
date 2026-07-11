import React from 'react';
import fs from 'fs';
import path from 'path';
import ClientPage from './ClientPage';

export default async function Page() {
  // Read content.json dynamically on the server
  const filePath = path.join(process.cwd(), 'src', 'data', 'content.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const content = JSON.parse(fileContents);

  return <ClientPage initialContent={content} />;
}
