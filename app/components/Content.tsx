import type { ReactNode } from 'react'

export default function Content({ children }: { children: ReactNode }) {
  return (
    <div
      className={`grid gap-2 ml-2
    prose lg:prose-xl prose-slate dark:prose-invert
    prose-headings:font-normal
    dark:prose-headings:text-yellow-400`}
    >
      {children}
    </div>
  )
}
