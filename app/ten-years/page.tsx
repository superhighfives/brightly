import Layout from '@/app/components/Layout'
import Logo from '@/app/components/Logo'
import Content from '@/app/components/Content'
import Button from '@/app/components/Button'
import { PiArrowArcLeft } from 'react-icons/pi'
import type { Metadata } from 'next'

import MDX from './content.mdx'

export const metadata: Metadata = {
  title: 'Ten Years • Brightly',
  description: "'I've been listening to this song for almost a decade. It's depressing how fast the time flows.'",
  openGraph: {
    type: 'website',
    url: '/ten-years',
    title: 'Ten Years • Brightly',
    description: "'I've been listening to this song for almost a decade. It's depressing how fast the time flows.'",
    images: ['/images/ten-years-banner.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ten Years • Brightly',
    description: "'I've been listening to this song for almost a decade. It's depressing how fast the time flows.'",
    images: ['/images/ten-years-banner.jpg'],
  },
}

export default function TenYears() {
  return (
    <Layout maxWidth="max-w-4xl">
      <Logo />
      <Content>
        <MDX />
        <hr />
        <div className="not-prose dark:text-yellow-400">
          <Button href="/" Icon={PiArrowArcLeft} title="Back to home" />
        </div>
        <hr />
      </Content>
    </Layout>
  )
}
