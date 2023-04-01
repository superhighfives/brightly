import Heading from '@/app/components/Heading'
import Section from '@/app/components/Section'
import Group from '@/app/components/Group'
import Table from '@/app/components/Table'
import Article from '@/app/components/Article'
import type { Article as IArticle } from '@/app/components/Article'

export default function Publications({ articles }: { articles: IArticle[] }) {
  return (
    <Section>
      <Group>
        <Heading>Reviews and Media</Heading>

        <blockquote className="pl-2 grid gap-2">
          &quot;[...] Charlie Gleason writes such heartbreaking lyrics it's hard
          not to indulge yourself. With its mix of folk, pop and electronica,
          [...] ‘Oh, Infinity’ is a profound collection of tracks with a stellar
          lineup of Melbourne musicians behind it.&quot;
          <div className="flex gap-6 items-center">
            <svg
              width="48"
              height="17"
              viewBox="0 0 48 17"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="NME logo"
              className="block dark:text-yellow-500"
              fill="currentColor"
            >
              <path d="M0 0H5.02126L10.1134 7.94211V0H14.9935V17H10.3483L4.88267 8.45351V17H0.0026027L0 0ZM35.3923 0L47.9998 0.0051656V4.47148H40.273V6.21809H47.9998V10.6889H40.273V12.5518H47.9998V17H35.3923V0ZM28.7217 0.0032285L28.7237 0H33.6278V17H28.7237V8.43866L25.199 14.5031L21.6606 8.43026V17H16.7558V0H21.6658L25.199 6.06377L28.7217 0.0032285Z" />
            </svg>
            <cite className="-ml-3 font-semibold text-2xs dark:text-yellow-600">
              —"Oh, Infinity" review
            </cite>
          </div>
        </blockquote>
      </Group>
      <Group size="sm">
        <Heading size="sm">Publications and Coverage</Heading>
        <Table>
          {articles.map((article, i) => (
            <Article
              highlight={i === 0}
              key={article.href}
              type={article.type}
              publication={article.publication}
              title={article.title}
              href={article.href}
              preview={article.preview}
            />
          ))}
        </Table>
      </Group>
    </Section>
  )
}
