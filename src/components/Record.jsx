import { Tag } from '~/components/Tag'

export function Record({ id, year, name, type, href }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 p-2 group outline-yellow-500"
    >
      <img
        alt={`${name} cover art`}
        className="w-12 h-12 block rounded"
        src={`/${id}.jpg`}
      />
      <div className="grid gap-2 flex-col min-w-0">
        <p className="max-w-full justify-self-start font-semibold text-sm truncate group-hover:bg-yellow-900/50 rounded-full transition-colors px-2 py-1">
          {name}
        </p>
        <div className="max-w-full justify-self-start flex gap-2 min-w-0">
          <Tag>{year}</Tag>
          <Tag>{type}</Tag>
        </div>
      </div>
    </a>
  )
}
