import Section from '@/app/components/Section'
import Heading from '@/app/components/Heading'
import Grid from '@/app/components/Grid'
import Service from '@/app/components/Service'

import { SiInstagram, SiTwitter, SiTumblr } from 'react-icons/si'

export default function Social() {
  return (
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
  )
}
