export default function Title({ children, size = 'sm' }) {
  const variantsSizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
  }

  return (
    <h3
      className={`truncate max-w-full justify-self-start ${variantsSizes[size]} font-semibold rounded-full group-hover:bg-slate-300/50 dark:group-hover:bg-yellow-700/50 px-2 py-1 transition-colors`}
      title={children.toString()}
    >
      {children}
    </h3>
  )
}
