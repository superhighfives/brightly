import type { ReactNode } from 'react'

export default function Tags({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-full justify-self-start flex gap-2 min-w-0 ml-2">
      {children}
    </div>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <p className="truncate text-2xs font-mono font-semibold text-slate-500 dark:text-yellow-600">
      {children}
    </p>
  )
}
