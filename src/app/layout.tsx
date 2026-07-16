import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Baskerville } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-libre",
});

import { getContentData } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  let title = "WRIrk - Premium Publication Support & Academic Services";
  let description = "Navigate the complex landscape of high-impact publishing. We empower scholars to achieve recognition in Scopus, Web of Science, and UGC-CARE indexed journals seamlessly.";
  
  try {
    const data = await getContentData();
    if (data?.globalSettings?.seoTitle?.value) {
      title = data.globalSettings.seoTitle.value;
    }
    if (data?.globalSettings?.seoDescription?.value) {
      description = data.globalSettings.seoDescription.value;
    }
  } catch(e) {}

  return {
    title,
    description,
    verification: {
      google: "BYFn0MOlE9xYJjRXkmjrW9ooFx0MWn9jQ0FkbFDkRaY"
    }
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${libreBaskerville.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MVL7QH95');
          `}
        </Script>

        {/* Google Analytics */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-61LLBY0BTP" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-61LLBY0BTP');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MVL7QH95"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        
        {children}
      </body>
    </html>
  );
}
