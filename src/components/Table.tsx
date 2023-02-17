import type { ReactNode } from 'react'
import { useState, useEffect } from 'react'
import type { IconType } from 'react-icons'
import Title from '~/components/Title'
import { getLinkPreview } from 'link-preview-js'

export default function Table({
  children,
  format = 'default',
}: {
  children: ReactNode
  format?: 'default' | 'data'
}) {
  const variantsFormats = {
    default: '',
    data: 'font-mono',
  }
  return (
    <dl
      className={`divide-y divide-slate-300/50 dark:divide-yellow-700/50 ${variantsFormats[format]}`}
    >
      {children}
    </dl>
  )
}

export function Row({
  id,
  title,
  data,
  href,
  Icon,
}: {
  id: string
  title: string
  data: string[]
  href: string
  Icon?: IconType
}) {
  return (
    <a
      key={id}
      href={href}
      className="py-2 group grid items-center xs:grid-cols-2 gap-4 outline-yellow-500"
    >
      <dt className="truncate font-bold text-xs justify-self-start max-w-full flex">
        <Title size="xs">{title}</Title>
      </dt>
      <dd
        className={`flex font-mono font-semibold text-slate-500 dark:text-yellow-600 text-2xs truncate gap-8 pl-1 ${
          data.length === 1 ? 'xs:justify-end' : ''
        }`}
      >
        {data.map((item, i) => (
          <span
            key={i}
            className={`${i === data.length - 1 ? 'truncate max-w-full' : ''}`}
          >
            {i === 0 && Icon ? (
              <Icon className={`inline box-content p-1 flex-shrink-0`} />
            ) : null}
            {item}
          </span>
        ))}
      </dd>
    </a>
  )
}

export function Article({
  id,
  title,
  href,
}: {
  id: string
  title: string
  href: string
}) {
  const [preview, setPreview] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(href)
        if (res.status === 200) {
          const preview = await getLinkPreview(href)
          setPreview(preview)
        }
      } catch (e) {
        console.warn(e)
      }
    }

    fetchData().catch(console.warn)
  }, [href])

  return preview ? (
    <a
      key={id}
      href={href}
      className="py-2 group flex items-center gap-3 outline-yellow-500"
    >
      <div className="w-4 h-4 relative ml-2 bg-black opacity-75 mix-blend-screen">
        <img
          className="absolute inset-0 grayscale"
          src={preview?.favicons[0]}
          alt=""
        />
        <div className="w-full h-full absolute bg-yellow-400 mix-blend-multiply"></div>
      </div>
      <dt className="truncate font-bold text-xs justify-self-start max-w-full flex">
        <Title size="xs">{title}</Title>
      </dt>
      <dd
        className={`flex flex-1 font-mono font-semibold text-slate-500 dark:text-yellow-600 text-2xs truncate gap-8 pl-1`}
      >
        <span className="truncate max-w-full">{preview?.title}</span>
      </dd>
    </a>
  ) : null
}
