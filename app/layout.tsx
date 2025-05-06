import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ppt theses',
  description: 'Created with Next.js 15 and Tailwind CSS',
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
