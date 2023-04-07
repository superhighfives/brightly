import Link from 'next/link'
import { FaRegClock } from 'react-icons/fa'

export default function Announcement() {
  return (
    <Link
      href="/ten-years"
      className="bg-stone-50 hover:bg-stone-100 dark:bg-yellow-400 dark:text-slate-950 hover:dark:bg-yellow-500 transition-colors p-3 shadow-xl flex font-semibold gap-2 text-sm outline-yellow-500 outline-offset-4 rounded-md"
    >
      <FaRegClock size="16" className="flex-shrink-0 opacity-40 mt-0.5" />
      <span>
        Read about the ten year anniversary of{' '}
        <strong className="font-bold">
          Beginnings&nbsp;&amp;&nbsp;Endings
        </strong>
      </span>
    </Link>
  )
}
