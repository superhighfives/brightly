export default function Grid({ cols = 1, children }) {
  const columnVariants = {
    1: 'xs:grid-cols-1',
    2: 'xs:grid-cols-2',
    3: 'xs:grid-cols-3',
    4: 'xs:grid-cols-4',
    5: 'xs:grid-cols-5',
    6: 'xs:grid-cols-6',
  }
  return (
    <div className={`grid ${columnVariants[cols]} gap-1 -ml-2`}>{children}</div>
  )
}
