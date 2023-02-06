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
import Singles, { Single } from '~/components/Singles'
import Description from '~/components/Description'

function App() {
  return (
    <Layout>
      <h1 className="text-4xl sm:text-6xl font-light uppercase tracking-wide">
        Brightly
      </h1>

      <header>
        <p className="text-slate-500 dark:text-yellow-500">
          <strong className="text-slate-600 dark:text-yellow-400 border-b border-slate-400/50 dark:border-yellow-700/50">
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
        <Grid cols="services">
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
        <Heading>Albums & EP's</Heading>
        <Grid cols="media">
          <Media
            id="beginnings-and-endings"
            format="jpg"
            name="Beginnings & Endings"
            href="https://wearebrightly.bandcamp.com/album/beginnings-endings"
            rounded="md"
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
            rounded="md"
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
            rounded="md"
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
            rounded="md"
          >
            <Tags>
              <Tag>2016</Tag>
              <Tag>Album</Tag>
            </Tags>
          </Media>
        </Grid>
      </Section>

      <Section>
        <Heading>Singles</Heading>

        <Singles>
          <Single
            id="rugby"
            name="Rugby"
            year="2016"
            album="One For Sorrow, Two For Joy"
          />
          <Single
            id="keep-me-close"
            name="Keep Me Close"
            year="2015"
            album="Oh, Infinity"
          />
          <Single id="true" name="True" year="2015" album="Oh, Infinity" />
          <Single
            id="doubt-acoustic"
            name="Doubt (Acoustic)"
            year="2013"
            album="The Greylings"
          />
          <Single
            id="world-war"
            name="World War"
            year="2013"
            album="The Greylings"
          />
          <Single
            id="preflight-nerves"
            name="Preflight Nerves"
            year="2013"
            album="Beginnings & Endings"
          />
          <Single id="sarah" name="Sarah" year="2013" album='Sarah 7"' />
          <Single
            id="tokyo"
            name="Tokyo"
            year="2013"
            album="We Were In Tokyo & Then We Woke Up"
          />
        </Singles>
      </Section>

      <Section>
        <Heading>Projects</Heading>
        <Grid cols="media">
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
