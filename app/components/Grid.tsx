import type { ReactNode } from 'react'

export default function Grid({
  cols = 'none',
  children,
}: {
  cols?: 'none' | 'media' | 'services'
  children: ReactNode
}) {
  const variantsColumns = {
    none: '',
    media: 'xs:grid-cols-2',
    services: 'grid-cols-2 xs:grid-cols-4',
  }
  return <div className={`grid ${variantsColumns[cols]} gap-4`}>{children}</div>
}
