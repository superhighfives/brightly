import Title from '~/components/Title'

export default function StreamingService({ href, Icon, title }) {
  return (
    <a
      className="grid gap-2 pr-1 outline-yellow-500 group min-w-0 p-2 pt-3"
      href={href}
    >
      <Icon className="ml-2 w-8 h-8" />
      <Title size="xs">{title}</Title>
    </a>
  )
}
