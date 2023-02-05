export default function Grid({ cols = 'none', children }) {
  const columnVariants = {
    none: '',
    media: 'xs:grid-cols-2',
    services: 'grid-cols-2 xs:grid-cols-3',
  }
  return (
    <div className={`grid ${columnVariants[cols]} gap-1 -ml-2`}>{children}</div>
  )
}
