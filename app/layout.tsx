import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stocker Jobs in Norway',
  description: 'Find warehouse and stocker positions in Norway',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
