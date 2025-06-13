import Title from '@/app/components/Title'

export interface Article {
  type: string
  publication: string
  title: string
  href: string
  preview: any
  highlight: boolean
}

export default function Article({
  type,
  publication,
  title,
  href,
  preview,
  highlight,
}: Article) {
  return (
    <a
      key={href}
      href={href}
      className={`py-2 group flex items-center gap-3 relative outline-yellow-500 ${
        highlight
          ? 'border-t-2 pt-1 mt-1 border-slate-400/50 dark:border-yellow-400/50'
          : ''
      }`}
    >
      {highlight ? (
        <div className="absolute -top-[0.6125rem] left-0 -rotate-6 bg-slate-400 dark:bg-yellow-400 text-white dark:text-stone-950 rounded-full text-2xs font-bold uppercase tracking-wider px-2 py-0">
          Latest
        </div>
      ) : null}
      <div className="w-4 h-4 shrink-0 relative ml-2">
        <div className="inset-0 absolute bg-slate-200 dark:bg-yellow-400 z-10 overflow-hidden rounded-full"></div>
        {preview &&
        preview.favicons[0] &&
        preview?.favicons[0].startsWith('https://') ? (
          <img
            width="16"
            height="16"
            className="absolute inset-0 grayscale dark:sepia overflow-hidden rounded-full z-20 mix-blend-multiply contrast-200"
            src={preview?.favicons[0]}
            alt=""
          />
        ) : null}
      </div>
      <span
        className={`hidden xs:block min-w-[5em] font-mono font-semibold text-slate-500 dark:text-yellow-600 text-2xs`}
      >
        {type}
      </span>
      <span className="font-bold text-xs justify-self-start max-w-full grid">
        <Title size="xs">{title}</Title>
        <span
          className={`grid w-full font-mono font-semibold text-slate-500 dark:text-yellow-600 text-2xs truncate gap-8 pl-1`}
        >
          <span className="ml-1 truncate max-w-full">
            <span className="pr-2 text-slate-600 dark:text-yellow-500">
              {publication}
              {''}
              {preview?.description || preview?.title ? ':' : ''}
            </span>
            {(preview?.description || preview?.title || '').trim()}
          </span>
        </span>
      </span>
    </a>
  )
}
