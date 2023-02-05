export function Tag({ children }) {
  return (
    <p className="truncate text-2xs font-mono font-bold border border-neutral-500/25 rounded-full px-2 text-yellow-500">
      {children}
    </p>
  )
}
