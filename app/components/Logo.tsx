import Link from 'next/link'

export default function Logo() {
  return (
    <Link
      href="/"
      className="outline-yellow-500 text-4xl sm:text-6xl font-light uppercase tracking-wide transition-colors hover:text-slate-900 dark:hover:text-yellow-300"
    >
      <h1>Brightly</h1>
    </Link>
  )
}
