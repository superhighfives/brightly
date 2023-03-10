import type { IconType } from 'react-icons'
import Title from '@/app/components/Title'

export default function Service({
  Icon,
  href,
  title,
  size = 'md',
}: {
  Icon: IconType
  href: string
  title: string
  size?: 'md' | 'sm'
}) {
  const variantsSizes = {
    md: 'w-12 h-12',
    sm: 'w-6 h-6',
  }
  return (
    <a className="grid gap-2 pr-1 outline-yellow-500 group min-w-0" href={href}>
      <Icon className={`box-content pt-1 pl-2 ${variantsSizes[size]}`} />
      <Title className="xs:text-xs" size="2xs">
        {title}
      </Title>
    </a>
  )
}
