import Title from '@/app/components/Title'

export interface Article {
  type: string
  publication: string
  title: string
  href: string
  preview: any
}

export default function Article({
  type,
  publication,
  title,
  href,
  preview,
}: Article) {
  return (
    <a
      key={href}
      href={href}
      className="py-2 group flex items-center gap-3 outline-yellow-500"
    >
      <div className="w-4 h-4 flex-shrink-0 relative ml-2">
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
