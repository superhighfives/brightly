export function StreamingService({ href, Icon, name }) {
  return (
    <a
      className="grid gap-2 pr-1 outline-yellow-500 group min-w-0 p-2 pt-3"
      href={href}
    >
      <Icon className="ml-2 w-8 h-8" />
      <h3 className="truncate max-w-full justify-self-start text-xs font-semibold rounded-full group-hover:bg-yellow-900/50 px-2 py-1 transition-colors">
        {name}
      </h3>
    </a>
  )
}
