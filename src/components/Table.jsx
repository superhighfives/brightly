import Title from '~/components/Title'

export default function Table({ children }) {
  return (
    <dl className="divide-y divide-slate-300/50 dark:divide-yellow-700/50">
      {children}
    </dl>
  )
}

export function Row({ id, title, data, href }) {
  return (
    <a
      key={id}
      href={href}
      className="py-2 group grid items-center xs:grid-cols-2 gap-2"
    >
      <dt className="truncate font-bold text-xs justify-self-start max-w-full -ml-2">
        <Title size="xs">{title}</Title>
      </dt>
      <dd className="flex font-mono font-semibold text-slate-500 dark:text-yellow-500 text-2xs truncate gap-8">
        {data.map((item, i) => (
          <span
            key={i}
            className={i === data.length - 1 ? 'truncate max-w-full' : ''}
          >
            {item}
          </span>
        ))}
      </dd>
    </a>
  )
}
