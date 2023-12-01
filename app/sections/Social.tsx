import Section from '@/app/components/Section'
import Heading from '@/app/components/Heading'
import Grid from '@/app/components/Grid'
import Service from '@/app/components/Service'

import {
  SiInstagram,
  SiTwitter,
  SiTumblr,
  SiFacebook,
  SiYoutube,
  SiSoundcloud,
} from 'react-icons/si'

export default function Social({ simple = false }) {
  return (
    <Section>
      {!simple ? <Heading>Social</Heading> : null}
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
        <Service
          href="https://facebook.com/wearebrightly"
          Icon={SiFacebook}
          title="Facebook"
          size="sm"
        />
        <Service
          href="https://youtube.com/wearebrightly"
          Icon={SiYoutube}
          title="YouTube"
          size="sm"
        />
        <Service
          href="https://soundcloud.com/wearebrightly"
          Icon={SiSoundcloud}
          title="SoundCloud"
          size="sm"
        />
      </Grid>
    </Section>
  )
}
