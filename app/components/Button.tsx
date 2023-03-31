import type { IconType } from 'react-icons'
import Title from '@/app/components/Title'

export default function Service({
  Icon,
  href,
  title,
}: {
  Icon: IconType
  href: string
  title: string
}) {
  return (
    <a
      className={`flex gap-2 pr-1 outline-yellow-500 group min-w-0`}
      href={href}
    >
      <Icon className="box-content pt-1 pl-2 w-7 h-7" />
      <Title size="md">{title}</Title>
    </a>
  )
}
