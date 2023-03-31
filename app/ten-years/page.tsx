'use client'

import Layout from '@/app/components/Layout'
import Logo from '@/app/components/Logo'
import Social from '@/app/sections/Social'
import Content from '@/app/components/Content'
import Visuals from '@/app/visuals/Visuals'
import MDX from './content.mdx'

export default function TenYears() {
  return (
    <>
      <Visuals />
      <Layout maxWidth="max-w-4xl">
        <Logo />
        <Content>
          <MDX />
        </Content>
        <Social />
      </Layout>
    </>
  )
}
