import type { ReactNode } from 'react'

export default function Group({
  children,
  size = 'md',
}: {
  children: ReactNode
  size?: 'sm' | 'md'
}) {
  const variantsSizes = {
    md: 'gap-4',
    sm: 'gap-3',
  }
  return <div className={`grid ${variantsSizes[size]}`}>{children}</div>
}
