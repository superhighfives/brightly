import {
  SiApplemusic,
  SiSpotify,
  SiBandcamp,
  SiYoutube,
  SiAmazon,
  SiSoundcloud,
  SiYoutubemusic,
  SiTidal,
} from 'react-icons/si'
import Service from '~/components/Service'
import Heading from '~/components/Heading'
import Section from '~/components/Section'
import Grid from '~/components/Grid'

export default function Listen() {
  return (
    <Section>
      <Heading>Listen</Heading>
      <Grid cols="services">
        <Service
          href="https://music.apple.com/us/artist/brightly/294844291"
          Icon={SiApplemusic}
          title="Apple Music"
        />
        <Service
          href="https://open.spotify.com/artist/2bzVTFy1nQlxHeuea2B0f2"
          Icon={SiSpotify}
          title="Spotify"
        />
        <Service
          href="https://youtube.com/wearebrightly"
          Icon={SiYoutube}
          title="YouTube"
        />
        <Service
          href="https://music.wearebrightly.com/"
          Icon={SiBandcamp}
          title="Bandcamp"
        />
        <Service
          href="https://amazon.co.uk/music/player/artists/B001JIAM3M/brightly"
          Icon={SiAmazon}
          title="Amazon Music"
        />
        <Service
          href="https://soundcloud.com/wearebrightly"
          Icon={SiSoundcloud}
          title="Soundcloud"
        />
        <Service
          href="https://music.youtube.com/channel/UCr-fUvf3KsQIneMJmwJoHLw"
          Icon={SiYoutubemusic}
          title="YouTube Music"
        />
        <Service
          href="https://tidal.com/browse/artist/5076807"
          Icon={SiTidal}
          title="Tidal"
        />
      </Grid>
    </Section>
  )
}
