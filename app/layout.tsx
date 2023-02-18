import { Inter } from '@next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${inter.className} bg-slate-100 text-slate-700 dark:bg-neutral-900 dark:text-yellow-400`}
      >
        {children}
      </body>
    </html>
  )
}
