'use client'

import Layout from '@/app/components/Layout'
import Logo from '@/app/components/Logo'
import Social from '@/app/sections/Social'
import Content from '@/app/components/Content'
import Visuals from '@/app/visuals/Visuals'
import Button from '@/app/components/Button'
import { PiArrowArcLeft } from 'react-icons/pi'

import MDX from './content.mdx'

export default function LysterfieldLake() {
  return (
    <>
      <Visuals />

      <Layout size="tight" maxWidth="max-w-md">
        <Logo simple={true} />
        <Content>
          <MDX />
        </Content>

        <Social simple={true} />
      </Layout>
    </>
  )
}
