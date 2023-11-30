import Link from 'next/link'

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex justify-self-start outline-yellow-500 font-medium uppercase tracking-wide transition-colors hover:text-slate-900 dark:hover:text-yellow-300 ml-2"
    >
      <h1>Brightly</h1>
    </Link>
  )
}
