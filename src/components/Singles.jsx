export default function Singles({ children }) {
  return (
    <dl className="divide-y divide-slate-300/50 dark:divide-yellow-700/50">
      {children}
    </dl>
  )
}

export function Single({ id, name, year, album }) {
  return (
    <div key={id} className="py-2 grid xs:grid-cols-2 gap-2">
      <dt className="font-bold text-xs">{name}</dt>
      <dd className="flex font-mono font-semibold text-slate-500 dark:text-yellow-500 text-2xs truncate gap-8">
        <span>{year}</span>
        <span className="truncate max-w-full">{album}</span>
      </dd>
    </div>
  )
}
