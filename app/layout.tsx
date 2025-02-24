import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/next';
export const metadata: Metadata = {
  title: 'Fastbase',
  description: 'Lightning-fast, beautiful, and AI-powered PostgreSQL client. Be the first to experience the future of database management.',
  icons: "/favicons/favicon.ico"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/favicons/favicon.ico"
        />
      </Head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
