import type { ReactNode } from 'react'

export default function Title({
  children,
  size = 'sm',
  truncate = true,
}: {
  children: ReactNode
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg'
  truncate?: boolean
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
      className={`${
        variantsSizes[size]
      } font-semibold rounded-full group-hover:bg-slate-300/50 dark:group-hover:bg-yellow-700/50 px-2 py-1 transition-colors ${
        truncate ? 'truncate max-w-full justify-self-start' : ''
      }`}
      title={children ? children.toString() : ''}
    >
      {children}
    </div>
  )
}
