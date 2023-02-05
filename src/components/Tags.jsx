export default function Tags({ children }) {
  return (
    <div className="max-w-full justify-self-start flex gap-2 min-w-0 ml-2">
      {children}
    </div>
  )
}

export function Tag({ children }) {
  return (
    <p className="truncate text-2xs font-mono font-bold border-b-2 border-slate-400/50 dark:border-yellow-700/50 text-slate-500 dark:text-yellow-500">
      {children}
    </p>
  )
}
