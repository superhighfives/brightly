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
// refreshes. Articles without a preview still render from articles.json.
export function getArticles() {
  return articles
    .map((article) => ({ ...article, preview: previews[article.href] }))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}
