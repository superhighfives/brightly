import Layout from '@/app/components/Layout'
import Logo from '@/app/components/Logo'
import Social from '@/app/sections/Social'
import Discography from '@/app/sections/Discography'
import Intro from '@/app/sections/Intro'
import Listen from '@/app/sections/Listen'
import Projects from '@/app/sections/Projects'
import Publications from '@/app/sections/Publications'
import { fetchData } from '@/lib/api'

import Visuals from './visuals/Visuals'

import data from '@/data/articles.json'

export default async function Home() {
  const articles = await fetchData(data)

  return (
    <>
      <Visuals />
      <Layout>
        <Logo />
        <Intro />
        <Listen />
        <Discography />
        <Projects />
        <Publications articles={articles} />
        <Social />
      </Layout>
    </>
  )
}
