import Layout from '@/app/components/Layout'
import Discography from '@/app/sections/Discography'
import Header from '@/app/sections/Header'
import Listen from '@/app/sections/Listen'
import Projects from '@/app/sections/Projects'
import Publications from '@/app/sections/Publications'
import Announcement from './components/Announcement'
import { getArticles } from '@/lib/articles'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <Layout>
      <Header />
      <Announcement />
      <Listen />
      <Discography />
      <Projects />
      <Publications articles={getArticles()} />
    </Layout>
  )
}
