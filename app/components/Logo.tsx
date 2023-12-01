import Link from 'next/link'

export default function Logo({ simple = false }) {
  return (
    <div className="flex flex-col gap-4 items-center justify-start">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="images/avatar.jpg"
        width="120"
        className="rounded-full shadow-md"
        alt="A close up of a man with short hair, with one tattooed hand in front of his face"
      />
      <Link
        href="/"
        className="inline-block outline-yellow-500 font-medium uppercase tracking-wide text-xl transition-colors hover:text-slate-900 dark:hover:text-yellow-300"
      >
        <h1>Brightly</h1>
      </Link>
      {!simple ? <div>· · ·</div> : null}
    </div>
  )
}
