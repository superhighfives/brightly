import { getPreviewFromContent } from 'link-preview-js'

export async function fetchData(items: any[]) {
  const output = await Promise.all(
    items.map(async (item) => {
      const res = await fetch(item.href)
      const preview = await getPreviewFromContent({
        url: item.href,
        headers: {
          'content-type': 'text/html; charset=ISO-8859-1',
        },
        data: await res.text(),
      })
      return {
        preview,
        ...item,
      }
    })
  )

  return output
}
