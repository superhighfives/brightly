import Layout from '@/app/components/Layout'
import Logo from '@/app/components/Logo'
import Content from '@/app/components/Content'
import type { Metadata } from 'next'

import MDX from './content.mdx'

export const metadata: Metadata = {
  title: 'Lysterfield Lake • Brightly',
  description: 'A list of links to Lysterfield Lake on different streaming services.',
  openGraph: {
    type: 'website',
    url: '/lysterfield-lake',
    title: 'Lysterfield Lake • Brightly',
    description: 'A list of links to Lysterfield Lake on different streaming services.',
    images: ['/images/record-lysterfield-lake.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lysterfield Lake • Brightly',
    description: 'A list of links to Lysterfield Lake on different streaming services.',
    images: ['/images/record-lysterfield-lake.jpg'],
  },
}

export default function LysterfieldLake() {
  return (
    <Layout size="tight" maxWidth="max-w-md">
      <Logo simple={true} />
      <Content>
        <MDX />
      </Content>
    </Layout>
  )
}
