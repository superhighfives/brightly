export function Grid({ cols = 1, children }) {
  const columnVariants = {
    2: 'xs:grid-cols-2',
    5: 'xs:grid-cols-5',
  }
  return (
    <div className={`grid ${columnVariants[cols]} gap-1 -ml-2`}>{children}</div>
  )
}
