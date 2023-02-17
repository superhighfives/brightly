import { useState, useEffect } from 'react'
import Title from '~/components/Title'
import { getPreviewFromContent } from 'link-preview-js'

export function Article({
  type,
  publication,
  title,
  href,
}: {
  type: string
  publication: string
  title: string
  href: string
}) {
  const [preview, setPreview] = useState<any>(null)

  const wrappedHref = `https://parse.superhighfives.workers.dev/${href}`
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(wrappedHref)
        if (res.status === 200) {
          const preview = await getPreviewFromContent({
            url: href,
            headers: {
              'content-type': 'text/html; charset=ISO-8859-1',
            },
            data: await res.text(),
          })
          setPreview(preview)
        }
      } catch (e) {
        console.warn(e)
      }
    }

    fetchData().catch(console.warn)
  }, [href, wrappedHref])
  console.log(preview)
  return (
    <a
      key={href}
      href={href}
      className="py-2 group flex items-center gap-3 outline-yellow-500"
    >
      <div className="w-4 h-4 flex-shrink-0 relative ml-2">
        <div className="inset-0 absolute bg-yellow-400 z-10 overflow-hidden rounded-full"></div>
        {preview ? (
          <>
            <img
              className="absolute inset-0 sepia overflow-hidden rounded-full z-20 mix-blend-multiply contrast-200"
              src={preview?.favicons[0]}
              alt=""
            />
          </>
        ) : null}
      </div>
      <span
        className={`hidden xs:block min-w-[5em] font-mono font-semibold text-slate-500 dark:text-yellow-600 text-2xs`}
      >
        {type}
      </span>
      <dt className="font-bold text-xs justify-self-start max-w-full grid">
        <Title size="xs">{title}</Title>
        <dd
          className={`grid w-full font-mono font-semibold text-slate-500 dark:text-yellow-600 text-2xs truncate gap-8 pl-1`}
        >
          <span className="ml-1 truncate max-w-full">
            <span className="pr-2 text-slate-600 dark:text-yellow-500">
              {publication}:
            </span>
            {preview ? preview?.title : ''}{' '}
          </span>
        </dd>
      </dt>
    </a>
  )
}
