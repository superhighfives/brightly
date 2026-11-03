import articles from '@/data/articles.json'
import linkPreviews from '@/data/link-previews.json'

export interface LinkPreview {
  title?: string
  description?: string
  favicon?: string
  image?: string
  fetchedAt: string
}

const previews: Record<string, LinkPreview | undefined> = linkPreviews.previews

// Previews come from data/link-previews.json, which `npm run previews`
// refreshes. Articles without a preview still render from articles.json,
// and a `description` there fills in when a preview doesn't have one.
export function getArticles() {
  return articles
    .map(({ description, ...article }: (typeof articles)[number] & { description?: string }) => {
      const preview = previews[article.href]
      return {
        ...article,
        preview:
          description && !preview?.description
            ? { ...preview, description, fetchedAt: preview?.fetchedAt ?? '' }
            : preview,
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}
