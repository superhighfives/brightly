import {
  SiApplemusic,
  SiSpotify,
  SiBandcamp,
  SiYoutube,
  SiAmazon,
  SiSoundcloud,
  SiInstagram,
  SiYoutubemusic,
  SiTidal,
  SiTwitter,
  SiTumblr,
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
      <h1 className="text-4xl sm:text-6xl font-light uppercase tracking-wide pl-2">
        Brightly
      </h1>

      <header className="pl-2">
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

      <Section>
        <Heading>Albums & EP's</Heading>
        <Grid cols="media">
          <Media
            id="record-beginnings-and-endings"
            format="jpg"
            title="Beginnings & Endings"
            href="https://wearebrightly.bandcamp.com/album/beginnings-endings"
            type="record"
          >
            <Tags>
              <Tag>2013</Tag>
              <Tag>Album</Tag>
            </Tags>
          </Media>
          <Media
            id="record-the-greylings"
            format="jpg"
            title="The Greylings"
            href="https://wearebrightly.bandcamp.com/album/the-greylings"
            type="record"
          >
            <Tags>
              <Tag>2014</Tag>
              <Tag>EP</Tag>
            </Tags>
          </Media>
          <Media
            id="record-oh-infinity"
            format="jpg"
            title="Oh, Infinity"
            href="https://wearebrightly.bandcamp.com/album/oh-infinity"
            type="record"
          >
            <Tags>
              <Tag>2015</Tag>
              <Tag>Album</Tag>
            </Tags>
          </Media>
          <Media
            id="record-sorrow-and-joy"
            format="jpg"
            title="One For Sorrow, Two For Joy"
            href="https://wearebrightly.bandcamp.com/album/one-for-sorrow-two-for-joy"
            type="record"
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
            href="https://rugby.wearebrightly.com/"
          />
          <Row
            id="iwnlyg"
            title="I Will Never Let You Go"
            data={['2016', 'One For Sorrow, Two For Joy']}
            href="https://www.youtube.com/watch?v=1ikrtVm5T5c"
          />
          <Row
            id="keep-me-close"
            title="Keep Me Close"
            data={['2015', 'Oh, Infinity']}
            href="https://vimeo.com/129595248"
          />
          <Row
            id="true"
            title="True"
            data={['2015', 'Oh, Infinity']}
            href="https://www.youtube.com/watch?v=La-gqpfnOKY"
          />
          <Row
            id="doubt-acoustic"
            title="Doubt (Acoustic)"
            data={['2013', 'The Greylings']}
            href="https://www.youtube.com/watch?v=B9QeLOa0n-k"
          />
          <Row
            id="doubt-acoustic"
            title="Doubt (Ktsche Remix)"
            data={['2013', 'Doubt (Ktsche Remix)']}
            href="https://www.youtube.com/watch?v=Ih19EysHaY8"
          />
          <Row
            id="this-sinking-ship"
            title="This Sinking Ship"
            data={['2013', 'The Greylings']}
            href="https://www.youtube.com/watch?v=EKtMDKIry8I"
          />
          <Row
            id="world-war"
            title="World War"
            data={['2013', 'The Greylings']}
            href="https://www.youtube.com/watch?v=Ci0sOZ86Los"
          />
          <Row
            id="wyfiwily-remix"
            title="Will You Feel It When I Leave You? (Brightly Remix)"
            data={['2014', 'Selfish Price (Ceres)']}
            href="https://ceresband.bandcamp.com/track/will-you-feel-it-when-i-leave-you-brightly-remix"
          />
          <Row
            id="preflight-nerves"
            title="Preflight Nerves"
            data={['2013', 'Beginnings & Endings']}
            href="https://www.youtube.com/watch?v=hMaeY0aP1xQ"
          />
          <Row
            id="sarah"
            title="Sarah"
            data={['2013', 'Sarah 7"']}
            href="https://www.youtube.com/watch?v=URZ-GaAJ-V8"
          />
          <Row
            id="and-then-we-woke-up"
            title="& Then We Woke Up"
            data={['2013', 'We Were In Tokyo & Then We Woke Up']}
            href="https://www.youtube.com/watch?v=IH1PEb9X6kY"
          />
          <Row
            id="tokyo"
            title="Tokyo"
            data={['2013', 'We Were In Tokyo & Then We Woke Up']}
            href="https://www.youtube.com/watch?v=gA77r0aGtpM"
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
            href="https://iwillneverletyougo.wearebrightly.com/"
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
        <Heading>Reviews and Media</Heading>

        <blockquote className="pl-2 grid gap-4">
          "His songs might kick off sounding like formulaic indie folk, but
          Melbourne’s Charlie Gleason writes such heartbreaking lyrics it’s hard
          not to indulge yourself. With its mix of folk, pop and electronica,
          debut album ‘Oh, Infinity’ is a profound collection of tracks with a
          stellar lineup of Melbourne musicians behind it."
          <div className="grid gap-2">
            <img
              src="/images/logo-nme.svg"
              alt="NME logo"
              className="block dark:invert"
            />
            <cite className="font-bold text-xs">—Review of "Oh, Infinity"</cite>
          </div>
        </blockquote>
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

export default App
