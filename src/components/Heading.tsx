import type { ReactNode } from 'react'

export default function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="uppercase font-semibold tracking-widest text-xs text-slate-500 dark:text-yellow-500 pl-2">
      {children}
    </h2>
  )
}
