import type { ReactNode } from 'react'

export default function Title({
  children,
  size = 'sm',
  truncate = true,
  className = '',
}: {
  children: ReactNode
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg'
  truncate?: boolean
  className?: string
}) {
  const variantsSizes = {
    '2xs': 'text-2xs',
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
  }

  return (
    <div
      className={`${className} ${
        variantsSizes[size]
      } justify-self-start font-semibold rounded-md group-hover:bg-slate-300/50 dark:group-hover:bg-yellow-700/50 px-2 py-1 transition-colors ${
        truncate ? 'truncate max-w-full' : ''
      }`}
      title={children ? children.toString() : ''}
    >
      {children}
    </div>
  )
}
