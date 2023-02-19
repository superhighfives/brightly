import type { ReactNode } from 'react'
import type { IconType } from 'react-icons'
import Title from '@/app/components/Title'

export default function Table({
  children,
  format = 'default',
}: {
  children: ReactNode
  format?: 'default' | 'data'
}) {
  const variantsFormats = {
    default: '',
    data: 'font-mono',
  }
  return (
    <dl
      className={`divide-y divide-slate-300/50 dark:divide-yellow-700/50 ${variantsFormats[format]}`}
    >
      {children}
    </dl>
  )
}

export function Row({
  id,
  title,
  data,
  href,
  size = 'xs',
  Icon,
}: {
  id: string
  title: string
  data: string[]
  href: string
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg'
  Icon?: IconType
}) {
  return (
    <a
      key={id}
      href={href}
      className="py-2 group grid items-center xs:grid-cols-2 gap-2 xs:gap-4 outline-yellow-500"
    >
      <dt className="truncate font-bold text-xs justify-self-start max-w-full flex">
        <Title size={size}>{title}</Title>
      </dt>
      <dd
        className={`flex font-mono font-semibold text-slate-500 dark:text-yellow-600 text-2xs truncate gap-8 pl-1 ${
          data.length === 1 ? 'xs:justify-end' : ''
        }`}
      >
        {data.map((item, i) => (
          <span
            key={i}
            className={`${i === data.length - 1 ? 'truncate max-w-full' : ''}`}
          >
            {i === 0 && Icon ? (
              <Icon className={`inline box-content p-1 flex-shrink-0`} />
            ) : null}
            {item}
          </span>
        ))}
      </dd>
    </a>
  )
}
