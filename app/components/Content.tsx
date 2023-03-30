import type { ReactNode } from 'react'

export default function Content({ children }: { children: ReactNode }) {
  return (
    <div
      className={`
      ml-2
      prose lg:prose-xl prose-slate dark:prose-invert
      prose-headings:font-normal prose-headings:tracking-tight
      prose-headings:text-slate-800 dark:prose-headings:text-yellow-400
      prose-blockquote:my-0 prose-blockquote:text-slate-800 dark:prose-blockquote:text-yellow-400
      prose-blockquote:border-slate-800 dark:prose-blockquote:border-yellow-500
      prose-strong:text-slate-800 dark:prose-strong:text-yellow-500
      prose-em:font-bold
    `}
    >
      {children}
    </div>
  )
}
