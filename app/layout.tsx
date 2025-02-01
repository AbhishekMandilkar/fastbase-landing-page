import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FastBase',
  description: 'Lightning-fast, beautiful, and AI-powered PostgreSQL client. Be the first to experience the future of database management.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
