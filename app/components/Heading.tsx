import type { ReactNode } from 'react'

export default function Heading({
  children,
  size = 'md',
}: {
  children: ReactNode
  size?: 'md' | 'sm'
}) {
  const variantsSizes = {
    md: 'text-xs',
    sm: 'text-2xs',
  }
  return (
    <h2
      id={children?.toString().replace(/\s+/g, '-').toLowerCase()}
      className={`${variantsSizes[size]} uppercase font-semibold tracking-widest text-slate-500 dark:text-yellow-500 pl-2`}
    >
      {children}
    </h2>
  )
}
