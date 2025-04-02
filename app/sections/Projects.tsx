import Heading from '@/app/components/Heading'
import Section from '@/app/components/Section'
import Group from '@/app/components/Group'
import Media from '@/app/components/Media'
import Description from '@/app/components/Description'
import Table, { Row } from '@/app/components/Table'
import Grid from '@/app/components/Grid'
import { SiGithub } from 'react-icons/si'

export default function Projects({
  variant = 'media',
}: {
  variant?: 'none' | 'media' | 'services'
}) {
  return (
    <Section>
      <Group>
        <Heading>Projects</Heading>
        <Grid cols={variant}>
          <Media
            id="project-lake"
            format="svg"
            title="Lysterfield Lake"
            href="https://lysterfieldlake.com/"
          >
            <Description>AI-generated fever dreams</Description>
          </Media>
          <Media
            id="project-iwnlyg"
            format="svg"
            title="I Will Never Let You Go"
            href="https://iwillneverletyougo.wewerebrightly.com/"
          >
            <Description>WebGL webcam mashup</Description>
          </Media>
          <Media
            id="project-rugby"
            format="svg"
            title="Rugby"
            href="https://rugby.wewerebrightly.com/"
          >
            <Description>Love letter to the humble GIF</Description>
          </Media>
          <Media
            id="project-true"
            format="svg"
            title="True"
            href="https://true.wewerebrightly.com/"
          >
            <Description>Immersive lyric video</Description>
          </Media>
          <Media
            id="project-tweetflight"
            format="svg"
            title="Tweetflight"
            href="https://tweetflight.wewerebrightly.com/"
          >
            <Description>Twitter karaoke</Description>
          </Media>
          <Media
            id="project-beginnings"
            format="svg"
            title="Beginnings & Endings"
            href="https://beginnings.wewerebrightly.com/"
          >
            <Description>Musical pyramid scheme</Description>
          </Media>
        </Grid>
      </Group>

      <Group size="sm">
        <Heading size="sm">Source code / repos</Heading>
        <Table format="data">
          <Row
            id="repo-lake"
            title="Lysterfield Lake"
            data={['superhighfives/lysterfield-lake']}
            href="https://github.com/superhighfives/lysterfield-lake"
            Icon={SiGithub}
            size="2xs"
            highlight={true}
          />
          <Row
            id="repo-rugby"
            title="Rugby"
            data={['superhighfives/rugby']}
            href="https://github.com/superhighfives/rugby"
            Icon={SiGithub}
            size="2xs"
          />
          <Row
            id="repo-iwnlyg"
            title="I Will Never Let You Go"
            data={['superhighfives/i-will-never-let-you-go']}
            href="https://github.com/superhighfives/i-will-never-let-you-go"
            Icon={SiGithub}
            size="2xs"
          />
          <Row
            id="repo-true"
            title="True"
            data={['superhighfives/true']}
            href="https://github.com/superhighfives/true"
            Icon={SiGithub}
            size="2xs"
          />
          <Row
            id="repo-tweetflight"
            title="Tweetflight"
            data={['superhighfives/rugby']}
            href="https://github.com/superhighfives/rugby"
            Icon={SiGithub}
            size="2xs"
          />
          <Row
            id="repo-beginnings-and-endings"
            title="Beginnings & Endings"
            data={['superhighfives/beginnings-and-endings']}
            href="https://github.com/superhighfives/beginnings-and-endings"
            Icon={SiGithub}
            size="2xs"
          />
        </Table>
      </Group>
    </Section>
  )
}
