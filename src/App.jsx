import {
  SiApplemusic,
  SiSpotify,
  SiBandcamp,
  SiYoutube,
  SiAmazon,
  SiSoundcloud,
} from 'react-icons/si'

import { Heading } from './components/Heading'
import { Record } from './components/Record'
import { StreamingService } from './components/StreamingService'
import { Grid } from './components/Grid'
import { Layout } from './components/Layout'
import { Section } from './components/Section'

function Project({ id }) {
  return (
    <img src={`/project-${id}.svg`} className="w-16 h-16" alt="Project Rubgy" />
  )
}

function App() {
  return (
    <Layout>
      <h1 className="text-4xl font-light uppercase tracking-wide">Brightly</h1>

      <Section>
        <Heading>Listen</Heading>
        <Grid cols="5">
          <StreamingService
            href="https://music.apple.com/us/artist/brightly/294844291"
            Icon={SiApplemusic}
            name="Apple"
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
          <StreamingService href="#" Icon={SiAmazon} name="Amazon" />
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
          <Record
            id="beginnings-and-endings"
            year="2013"
            name="Beginnings & Endings"
            type="Album"
            href="https://wearebrightly.bandcamp.com/album/beginnings-endings"
          />
          <Record
            id="the-greylings"
            year="2014"
            name="The Greylings"
            type="EP"
            href="https://wearebrightly.bandcamp.com/album/the-greylings"
          />
          <Record
            id="oh-infinity"
            year="2015"
            name="Oh, Infinity"
            type="Album"
            href="https://wearebrightly.bandcamp.com/album/oh-infinity"
          />
          <Record
            id="sorrow-and-joy"
            year="2016"
            name="One For Sorrow, Two For Joy"
            type="Album"
            href="https://wearebrightly.bandcamp.com/album/one-for-sorrow-two-for-joy"
          />
        </Grid>
      </Section>

      <Section>
        <Heading>Projects</Heading>
        <Grid cols="5">
          <Project id="iwnlyg" />
          <Project id="rugby" />
          <Project id="true" />
          <Project id="tweetflight" />
          <Project id="beginnings" />
        </Grid>
      </Section>

      <footer>
        <p>
          <strong>
            Brightly is Charlie Gleason, a musician, programmer and computer
            science dropout.
          </strong>{' '}
          Along with Nic Lam and Joshua Barber, Brightly threads together folk,
          electronica, and surreptitious recordings of children screaming in
          airplanes.
        </p>
      </footer>
    </Layout>
  )
}

export default App
