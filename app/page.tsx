import Layout from '@/app/components/Layout'
import Discography from '@/app/sections/Discography'
import Header from '@/app/sections/Header'
import Listen from '@/app/sections/Listen'
import Projects from '@/app/sections/Projects'
import Publications from '@/app/sections/Publications'
import Announcement from './components/Announcement'
import { fetchData } from '@/lib/api'

import data from '@/data/articles.json'

export default async function Home() {
  const articles =
    process.env.NODE_ENV !== 'development' ? await fetchData(data) : []

  return (
      <Layout>
        <Header />
        <Announcement />
        <Listen />
        <Discography />
        <Projects />
        <Publications articles={articles} />
      </Layout>
  )
}
