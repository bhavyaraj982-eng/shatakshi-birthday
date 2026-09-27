import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'For Shatakshi — A Birthday Memory Book',
  description: 'A cinematic digital scrapbook celebrating Shatakshi\'s birthday. Memories, videos, letters, and love from the people who make life chaotic.',
  openGraph: {
    title: 'For Shatakshi — A Birthday Memory Book',
    description: 'A cinematic digital scrapbook celebrating Shatakshi\'s birthday.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#F8F4EF',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}