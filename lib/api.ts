import { getPreviewFromContent } from 'link-preview-js'

export async function fetchData(items: any[]) {
  try {
    const output = await Promise.all(
      items.map(async (item) => {
        try {
          const res = await fetch(item.href)
          if (res.status === 200) {
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
          }
        } catch (e) {
          console.warn(e)
        }
      })
    )

    return output
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .filter((item) => item !== undefined)
  } catch (e) {
    console.warn(e)
    return []
  }
}
