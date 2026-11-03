// Fetches link previews for every article in data/articles.json and writes
// them to data/link-previews.json, which the home page reads at build time.
//
// Run with `npm run previews`. Commit the result.
//
// When a link fails, the previous preview for it is kept. Links that have
// never succeeded get no preview, and the page falls back to the title and
// publication in articles.json.

import { readFile, writeFile } from 'node:fs/promises'
import { getPreviewFromContent } from 'link-preview-js'

const ARTICLES_PATH = new URL('../data/articles.json', import.meta.url)
const PREVIEWS_PATH = new URL('../data/link-previews.json', import.meta.url)
const TIMEOUT_MS = 20_000
const CONCURRENCY = 6
const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36'

interface Article {
  href: string
}

interface LinkPreview {
  title?: string
  description?: string
  favicon?: string
  image?: string
  fetchedAt: string
}

interface LinkPreviewFile {
  previews: Record<string, LinkPreview>
  failures: Record<string, { error: string; checkedAt: string }>
}

function clean(value: string | undefined) {
  const trimmed = value?.replace(/\s+/g, ' ').trim()
  return trimmed || undefined
}

// Tumblr starts post descriptions with reaction counts, like
// "💬 0 🔁 0 ❤️ 0 · Rate, review and download True".
function cleanDescription(value: string | undefined) {
  return clean(value?.replace(/^\s*💬\s*\d+\s*🔁\s*\d+\s*❤️?\s*\d+\s*·\s*/, ''))
}

function httpsOnly(urls: string[] | undefined) {
  return urls?.find((url) => url.startsWith('https://'))
}

async function fetchPreview(href: string): Promise<LinkPreview> {
  const res = await fetch(href, {
    headers: { 'user-agent': USER_AGENT, accept: 'text/html' },
    redirect: 'follow',
    signal: AbortSignal.timeout(TIMEOUT_MS),
  })
  if (res.status !== 200) throw new Error(`HTTP ${res.status}`)

  const preview = await getPreviewFromContent({
    url: res.url || href,
    headers: Object.fromEntries(res.headers),
    data: await res.text(),
  })

  return {
    title: 'title' in preview ? clean(preview.title) : undefined,
    description:
      'description' in preview
        ? cleanDescription(preview.description)
        : undefined,
    favicon: httpsOnly(preview.favicons),
    image: 'images' in preview ? httpsOnly(preview.images) : undefined,
    fetchedAt: new Date().toISOString(),
  }
}

async function mapWithConcurrency<T, R>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<R>
) {
  const results: R[] = new Array(items.length)
  let next = 0
  const workers = Array.from({ length: limit }, async () => {
    while (next < items.length) {
      const index = next++
      results[index] = await fn(items[index])
    }
  })
  await Promise.all(workers)
  return results
}

async function readPrevious(): Promise<LinkPreviewFile> {
  try {
    return JSON.parse(await readFile(PREVIEWS_PATH, 'utf8'))
  } catch {
    return { previews: {}, failures: {} }
  }
}

async function main() {
  const articles: Article[] = JSON.parse(await readFile(ARTICLES_PATH, 'utf8'))
  const previous = await readPrevious()
  const output: LinkPreviewFile = { previews: {}, failures: {} }

  const results = await mapWithConcurrency(
    articles,
    CONCURRENCY,
    async ({ href }) => {
      try {
        return { href, preview: await fetchPreview(href) }
      } catch (e) {
        const error =
          e instanceof Error
            ? e.cause instanceof Error
              ? e.cause.message
              : e.message
            : String(e)
        return { href, error }
      }
    }
  )

  for (const result of results) {
    if ('preview' in result && result.preview) {
      output.previews[result.href] = result.preview
      console.log(`ok    ${result.href}`)
      continue
    }
    const kept = previous.previews[result.href]
    if (kept) output.previews[result.href] = kept
    output.failures[result.href] = {
      error: result.error ?? 'unknown error',
      checkedAt: new Date().toISOString(),
    }
    console.log(
      `fail  ${result.href} (${result.error}${kept ? ', kept previous preview' : ''})`
    )
  }

  await writeFile(PREVIEWS_PATH, JSON.stringify(output, null, 2) + '\n')

  const failed = Object.keys(output.failures).length
  console.log(
    `\n${articles.length - failed} fetched, ${failed} failed. Wrote data/link-previews.json`
  )
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
