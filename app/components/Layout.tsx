import type { ReactNode } from 'react'

export default function Layout({
  children,
  maxWidth = 'max-w-xl',
  size = 'default',
}: {
  children: ReactNode
  maxWidth?: string
  size?: 'default' | 'tight'
}) {
  const variantsSizes = {
    default: 'py-[25vh] sm:py-64',
    tight: 'py-16',
  }
  return (
    <div
      className={`w-full px-4 sm:px-2 grid gap-16 ${maxWidth} ${variantsSizes[size]}`}
    >
      {children}
    </div>
  )
}
