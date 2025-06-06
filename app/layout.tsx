import { Inter } from "next/font/google"
import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brightly',
  description: 'Brightly was Charlie Gleason, a musician, programmer, and computer science dropout. He threaded together folk, electronica, and surreptitious recordings of children screaming in airplanes with projects that explore the intersection of technology, music, and art.',
  metadataBase: new URL('https://wewerebrightly.com'),
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Brightly',
    description: 'Brightly was Charlie Gleason, a musician, programmer, and computer science dropout. He threaded together folk, electronica, and surreptitious recordings of children screaming in airplanes with projects that explore the intersection of technology, music, and art.',
    images: ['/social-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brightly',
    description: 'Brightly was Charlie Gleason, a musician, programmer, and computer science dropout. He threaded together folk, electronica, and surreptitious recordings of children screaming in airplanes with projects that explore the intersection of technology, music, and art.',
    images: ['/social-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
} 

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      
      <body
        className={`${inter.className} bg-slate-100 text-slate-700 dark:bg-neutral-900 dark:text-yellow-400`}
      >
        {children}
      </body>
    </html>
  )
}
