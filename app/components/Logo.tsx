import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="text-4xl sm:text-6xl font-light uppercase tracking-wide pl-2 transition-colors hover:text-slate-900 dark:hover:text-white ">
        Brightly
      </h1>
    </Link>
  )
}
