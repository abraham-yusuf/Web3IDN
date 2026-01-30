import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import '../src/styles/global.css';
import './global.css';

export const metadata = {
  title: {
    default: 'Web3IDN',
    template: '%s – Web3IDN'
  },
  description: 'Advancing blockchain education, research, resources and development Web3 Indonesia',
  metadataBase: new URL('https://w3idn.xyz'),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/img/logo/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Script
          src="https://betteruptime.com/widgets/announcement.js"
          data-id="161215"
          type="text/javascript"
          strategy="lazyOnload"
          async
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
            `,
          }}
        />
        <RootProvider>
          <Analytics />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
