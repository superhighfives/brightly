export default function Grid({ cols = 'none', children }) {
  const variantsColumns = {
    none: '',
    media: 'xs:grid-cols-2 -ml-2',
    services: 'grid-cols-2 xs:grid-cols-4 -ml-4',
  }
  return <div className={`grid ${variantsColumns[cols]} gap-1`}>{children}</div>
}
