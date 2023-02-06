import Title from '~/components/Title'

export default function Service({ href, Icon, title, size = 'md' }) {
  const variantsSizes = {
    md: 'w-8 h-8',
    sm: 'w-4 h-4',
  }
  return (
    <a
      className="grid gap-2 pr-1 outline-yellow-500 group min-w-0 p-2 pt-3"
      href={href}
    >
      <Icon className={`ml-2 ${variantsSizes[size]}`} />
      <Title size="xs">{title}</Title>
    </a>
  )
}
