import Title from '~/components/Title'

export default function Project({ id, name, description, href }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 p-2 group outline-yellow-500"
    >
      <img src={`/project-${id}.svg`} className="w-12 h-12" alt={name} />
      <div className="grid self-start gap-1">
        <Title>{name}</Title>
        <p className="text-2xs font-mono font-bold px-2 text-yellow-500">
          {description}
        </p>
      </div>
    </a>
  )
}
