import type { ReactNode } from 'react'

export default function Layout({
  children,
  maxWidth = 'max-w-xl',
}: {
  children: ReactNode
  maxWidth?: string
}) {
  return (
    <div
      className={`w-full px-4 sm:px-2 grid gap-16 py-[25vh] sm:py-64 ${maxWidth}`}
    >
      {children}
    </div>
  )
}
