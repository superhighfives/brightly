import Heading from '~/components/Heading'
import Section from '~/components/Section'
import Group from '~/components/Group'
import Media from '~/components/Media'
import Description from '~/components/Description'
import Table, { Row } from '~/components/Table'
import Grid from '~/components/Grid'
import { SiGithub } from 'react-icons/si'

export default function Projects() {
  return (
    <Section>
      <Group>
        <Heading>Projects</Heading>
        <Grid cols="media">
          <Media
            id="project-iwnlyg"
            format="svg"
            title="I Will Never Let You Go"
            href="https://iwillneverletyougo.wearebrightly.com/"
          >
            <Description>WebGL webcam mashup</Description>
          </Media>
          <Media
            id="project-rugby"
            format="svg"
            title="Rugby"
            href="https://rugby.wearebrightly.com/"
          >
            <Description>Love letter to the humble GIF</Description>
          </Media>
          <Media
            id="project-true"
            format="svg"
            title="True"
            href="https://true.wearebrightly.com/"
          >
            <Description>Immersive lyric video</Description>
          </Media>
          <Media
            id="project-tweetflight"
            format="svg"
            title="Tweetflight"
            href="https://tweetflight.wearebrightly.com/"
          >
            <Description>Twitter karaoke</Description>
          </Media>
          <Media
            id="project-beginnings"
            format="svg"
            title="Beginnings & Endings"
            href="https://beginnings.wearebrightly.com/"
          >
            <Description>Musical pyramid scheme</Description>
          </Media>
        </Grid>
      </Group>

      <Group size="sm">
        <Heading size="sm">Source code / repos</Heading>
        <Table format="data">
          <Row
            id="repo-rugby"
            title="Rugby"
            data={['superhighfives/rugby']}
            href="https://github.com/superhighfives/rugby"
            Icon={SiGithub}
          />
          <Row
            id="repo-iwnlyg"
            title="I Will Never Let You Go"
            data={['superhighfives/i-will-never-let-you-go']}
            href="https://github.com/superhighfives/i-will-never-let-you-go"
            Icon={SiGithub}
          />
          <Row
            id="repo-true"
            title="True"
            data={['superhighfives/true']}
            href="https://github.com/superhighfives/true"
            Icon={SiGithub}
          />
          <Row
            id="repo-tweetflight"
            title="Tweetflight"
            data={['superhighfives/rugby']}
            href="https://github.com/superhighfives/rugby"
            Icon={SiGithub}
          />
          <Row
            id="repo-beginnings-and-endings"
            title="Beginnings & Endings"
            data={['superhighfives/beginnings-and-endings']}
            href="https://github.com/superhighfives/beginnings-and-endings"
            Icon={SiGithub}
          />
        </Table>
      </Group>
    </Section>
  )
}
