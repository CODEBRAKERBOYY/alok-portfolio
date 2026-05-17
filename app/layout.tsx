import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alok Yadav | Full Stack AI Engineer',
  description: 'Portfolio of Alok Yadav - Full Stack AI Engineer from Kanpur',
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