import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-xl px-4 sm:px-2 grid gap-16 py-[25vh] sm:py-64">
      {children}
    </div>
  )
}
