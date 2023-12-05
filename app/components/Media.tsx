import type { ReactNode } from 'react'
import Title from '@/app/components/Title'

export default function Media({
  id,
  format,
  title,
  children,
  type,
  href,
}: {
  id: string
  format: string
  title: string
  children: ReactNode
  type?: 'icon' | 'record'
  href: string
}) {
  const variantsRounded = {
    icon: 'rounded-full',
    record:
      'rounded-md grayscale dark:sepia group-hover:grayscale-0 dark:group-hover:sepia-0 group-hover:border-slate-300 dark:group-hover:border-yellow-400',
  }
  return (
    <a
      href={href}
      className="flex self-start items-start gap-2 p-2 group outline-yellow-500"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        className={`w-12 h-12 block border-b-2 border-transparent transition-all ${
          type ? variantsRounded[type] : ''
        }`}
        src={`/images/${id}.${format}`}
      />
      <div className="grid gap-1 flex-col min-w-0">
        <Title truncate={false}>{title}</Title>
        {children}
      </div>
    </a>
  )
}
