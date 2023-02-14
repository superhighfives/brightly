import { Outlet } from 'react-router-dom'

import { SiInstagram, SiTwitter, SiTumblr } from 'react-icons/si'

import Heading from '~/components/Heading'
import Section from '~/components/Section'
import Service from '~/components/Service'
import Grid from '~/components/Grid'
import Layout from '~/components/Layout'

export default function App() {
  return (
    <Layout>
      <h1 className="text-4xl sm:text-6xl font-light uppercase tracking-wide pl-2">
        Brightly
      </h1>

      <Outlet />

      <Section>
        <Heading>Social</Heading>
        <Grid cols="services">
          <Service
            href="https://instagram.com/wearebrightly"
            Icon={SiInstagram}
            title="Instagram"
            size="sm"
          />
          <Service
            href="https://twitter.com/wearebrightly"
            Icon={SiTwitter}
            title="Twitter"
            size="sm"
          />
          <Service
            href="https://tumblr.com/wearebrightly"
            Icon={SiTumblr}
            title="Tumblr"
            size="sm"
          />
        </Grid>
      </Section>
    </Layout>
  )
}
