export default function Title({ children, size = 'sm', truncate = true }) {
  const variantsSizes = {
    '2xs': 'text-2xs',
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
  }

  return (
    <div
      className={`${
        variantsSizes[size]
      } font-semibold rounded-full group-hover:bg-slate-300/50 dark:group-hover:bg-yellow-700/50 px-2 py-1 transition-colors ${
        truncate ? 'truncate max-w-full justify-self-start' : ''
      }`}
      title={children.toString()}
    >
      {children}
    </div>
  )
}
