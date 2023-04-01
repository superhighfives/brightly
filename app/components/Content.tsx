import type { ReactNode } from 'react'

export default function Content({ children }: { children: ReactNode }) {
  return (
    <div
      className={`
      ml-2 mr-2
      prose prose-quoteless prose-stone dark:prose-invert
      prose-headings:font-normal prose-headings:tracking-tight
      prose-headings:text-stone-800 dark:prose-headings:text-yellow-400
      prose-blockquote:my-0 prose-blockquote:text-stone-800 
      prose-blockquote:text-lg dark:prose-blockquote:text-yellow-400
      prose-blockquote:border-stone-800 dark:prose-blockquote:border-yellow-500 
      prose-blockquote:before:content-none prose-blockquote:after:content-none
      prose-strong:text-stone-800 dark:prose-strong:text-yellow-500
      prose-em:font-medium dark:prose-em:text-white prose-em:text-stone-950
      sm:prose-h1:font-light lg:prose-h1:font-extralight
      prose-h1:text-4xl sm:prose-h1:text-6xl lg:prose-h1:text-9xl
      prose-h2:uppercase prose-h2:tracking-wider prose-h2:font-semibold prose-h2:text-sm
      prose-h1:sr-only
      max-w-none
    `}
    >
      {children}
    </div>
  )
}
