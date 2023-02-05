import Title from '~/components/Title'

export default function Media({
  id,
  format,
  name,
  children,
  rounded = false,
  href,
}) {
  const variantsRounded = {
    full: 'rounded-full',
    md: 'rounded-md',
  }
  return (
    <a
      href={href}
      className="flex items-center gap-2 p-2 group outline-yellow-500"
    >
      <img
        alt=""
        className={`w-12 h-12 block ${rounded ? variantsRounded[rounded] : ''}`}
        src={`/${id}.${format}`}
      />
      <div className="grid gap-1 flex-col min-w-0">
        <Title>{name}</Title>
        {children}
      </div>
    </a>
  )
}
