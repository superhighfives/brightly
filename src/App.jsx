import {
  SiApplemusic,
  SiSpotify,
  SiBandcamp,
  SiYoutube,
  SiAmazon,
  SiSoundcloud,
  SiInstagram,
} from 'react-icons/si'

import Heading from '~/components/Heading'
import Service from '~/components/Service'
import Grid from '~/components/Grid'
import Layout from '~/components/Layout'
import Section from '~/components/Section'
import Media from '~/components/Media'
import Tags, { Tag } from '~/components/Tags'
import Table, { Row } from '~/components/Table'
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
        </Grid>
      </Section>

      <Section>
        <Heading>Albums & EP's</Heading>
        <Grid cols="media">
          <Media
            id="beginnings-and-endings"
            format="jpg"
            title="Beginnings & Endings"
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
            title="The Greylings"
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
            title="Oh, Infinity"
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
            title="One For Sorrow, Two For Joy"
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

        <Table>
          <Row
            id="rugby"
            title="Rugby"
            data={['2016', 'One For Sorrow, Two For Joy']}
          />
          <Row
            id="iwnlyg"
            title="I Will Never Let You Go"
            data={['2016', 'One For Sorrow, Two For Joy']}
          />
          <Row
            id="keep-me-close"
            title="Keep Me Close"
            data={['2015', 'Oh, Infinity']}
          />
          <Row id="true" title="True" data={['2015', 'Oh, Infinity']} />
          <Row
            id="doubt-acoustic"
            title="Doubt (Acoustic)"
            data={['2013', 'The Greylings']}
          />
          <Row
            id="this-sinking-ship"
            title="This Sinking Ship"
            data={['2013', 'The Greylings']}
          />
          <Row
            id="world-war"
            title="World War"
            data={['2013', 'The Greylings']}
          />
          <Row
            id="preflight-nerves"
            title="Preflight Nerves"
            data={['2013', 'Beginnings & Endings']}
          />
          <Row id="sarah" title="Sarah" data={['2013', 'Sarah 7"']} />
          <Row
            id="and-then-we-woke-up"
            title="& Then We Woke Up"
            data={['2013', 'We Were In Tokyo & Then We Woke Up']}
          />
          <Row
            id="tokyo"
            title="Tokyo"
            data={['2013', 'We Were In Tokyo & Then We Woke Up']}
          />
        </Table>
      </Section>

      <Section>
        <Heading>Projects</Heading>
        <Grid cols="media">
          <Media
            id="project-iwnlyg"
            format="svg"
            title="I Will Never Let You Go"
            href="https://iwillneverletyougo.com/"
          >
            <Description>A WebGL mashup between viewers</Description>
          </Media>
          <Media
            id="project-rugby"
            format="svg"
            title="Rugby"
            href="https://rugby.wearebrightly.com/"
          >
            <Description>A love letter to the humble GIF</Description>
          </Media>
          <Media
            id="project-true"
            format="svg"
            title="True"
            href="https://true.wearebrightly.com/"
          >
            <Description>The WebAudio API meets karaoke</Description>
          </Media>
          <Media
            id="project-tweetflight"
            format="svg"
            title="Tweetflight"
            href="https://tweetflight.wearebrightly.com/"
          >
            <Description>The Twitter music video</Description>
          </Media>
          <Media
            id="project-beginnings"
            format="svg"
            title="Beginnings & Endings"
            href="https://beginnings.wearebrightly.com/"
          >
            <Description>Music meets pyramid scheme</Description>
          </Media>
        </Grid>
      </Section>

      <Section>
        <Heading>Social</Heading>
        <Grid cols="services">
          <Service
            href="https://instagram.com/wearebrightly"
            Icon={SiInstagram}
            title="Instagram"
            size="sm"
          />
        </Grid>
      </Section>
    </Layout>
  )
}

export default App
