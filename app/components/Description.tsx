import type { ReactNode } from 'react'

export default function Description({ children }: { children: ReactNode }) {
  return (
    <p className="text-2xs font-mono font-semibold px-2 text-slate-500 dark:text-yellow-600">
      {children}
    </p>
  )
}
