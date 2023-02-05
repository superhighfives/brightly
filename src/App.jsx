import {
  SiApplemusic,
  SiSpotify,
  SiBandcamp,
  SiYoutube,
  SiAmazon,
  SiSoundcloud,
} from 'react-icons/si'

import Heading from '~/components/Heading'
import StreamingService from '~/components/StreamingService'
import Grid from '~/components/Grid'
import Layout from '~/components/Layout'
import Section from '~/components/Section'
import Media from '~/components/Media'
import Tags, { Tag } from '~/components/Tags'
import Description from '~/components/Description'

function App() {
  return (
    <Layout>
      <h1 className="text-6xl font-light uppercase tracking-wide">Brightly</h1>

      <header>
        <p>
          <strong className="border-b-2 border-yellow-700/50">
            Brightly is Charlie Gleason, a musician, programmer and computer
            science dropout.
          </strong>{' '}
          Along with Nic Lam and Joshua Barber, Brightly threads together folk,
          electronica, and surreptitious recordings of children screaming in
          airplanes.
        </p>
      </header>

      <Section>
        <Heading>Listen</Heading>
        <Grid cols="3">
          <StreamingService
            href="https://music.apple.com/us/artist/brightly/294844291"
            Icon={SiApplemusic}
            name="Apple Music"
          />
          <StreamingService
            href="https://open.spotify.com/artist/2bzVTFy1nQlxHeuea2B0f2"
            Icon={SiSpotify}
            name="Spotify"
          />
          <StreamingService
            href="https://youtube.com/wearebrightly"
            Icon={SiYoutube}
            name="YouTube"
          />
          <StreamingService
            href="https://music.wearebrightly.com/"
            Icon={SiBandcamp}
            name="Bandcamp"
          />
          <StreamingService
            href="https://amazon.co.uk/music/player/artists/B001JIAM3M/brightly"
            Icon={SiAmazon}
            name="Amazon Music"
          />
          <StreamingService
            href="https://soundcloud.com/wearebrightly"
            Icon={SiSoundcloud}
            name="Soundcloud"
          />
        </Grid>
      </Section>

      <Section>
        <Heading>Discography</Heading>
        <Grid cols="2">
          <Media
            id="beginnings-and-endings"
            format="jpg"
            year="2013"
            name="Beginnings & Endings"
            type="Album"
            href="https://wearebrightly.bandcamp.com/album/beginnings-endings"
          >
            <Tags>
              <Tag>2013</Tag>
              <Tag>Album</Tag>
            </Tags>
          </Media>
          <Media
            id="the-greylings"
            format="jpg"
            name="The Greylings"
            href="https://wearebrightly.bandcamp.com/album/the-greylings"
          >
            <Tags>
              <Tag>2014</Tag>
              <Tag>EP</Tag>
            </Tags>
          </Media>
          <Media
            id="oh-infinity"
            format="jpg"
            name="Oh, Infinity"
            href="https://wearebrightly.bandcamp.com/album/oh-infinity"
          >
            <Tags>
              <Tag>2015</Tag>
              <Tag>Album</Tag>
            </Tags>
          </Media>
          <Media
            id="sorrow-and-joy"
            format="jpg"
            name="One For Sorrow, Two For Joy"
            href="https://wearebrightly.bandcamp.com/album/one-for-sorrow-two-for-joy"
          >
            <Tags>
              <Tag>2016</Tag>
              <Tag>Album</Tag>
            </Tags>
          </Media>
        </Grid>
      </Section>

      <Section>
        <Heading>Projects</Heading>
        <Grid cols="2">
          <Media
            id="project-iwnlyg"
            format="svg"
            name="I Will Never Let You Go"
            href="https://iwillneverletyougo.com/"
          >
            <Description>A WebGL mashup between viewers</Description>
          </Media>
          <Media
            id="project-rugby"
            format="svg"
            name="Rugby"
            href="https://rugby.wearebrightly.com/"
          >
            <Description>A love letter to the humble GIF</Description>
          </Media>
          <Media
            id="project-true"
            format="svg"
            name="True"
            href="https://true.wearebrightly.com/"
          >
            <Description>The WebAudio API meets karaoke</Description>
          </Media>
          <Media
            id="project-tweetflight"
            format="svg"
            name="Tweetflight"
            href="https://tweetflight.wearebrightly.com/"
          >
            <Description>The Twitter music video</Description>
          </Media>
          <Media
            id="project-beginnings"
            format="svg"
            name="Beginnings & Endings"
            href="https://beginnings.wearebrightly.com/"
          >
            <Description>Music meets pyramid scheme</Description>
          </Media>
        </Grid>
      </Section>
    </Layout>
  )
}

export default App
