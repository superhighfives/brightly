export default function Title({ children, size = 'sm' }) {
  const variantSizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
  }

  return (
    <h3
      className={`truncate max-w-full justify-self-start ${variantSizes[size]} font-semibold rounded-full group-hover:bg-yellow-700/50 px-2 py-1 transition-colors`}
    >
      {children}
    </h3>
  )
}
