export default function Heading({ children }) {
  return (
    <h2 className="uppercase font-semibold tracking-widest text-xs text-slate-500 dark:text-yellow-500">
      {children}
    </h2>
  )
}
