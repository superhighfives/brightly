import Heading from '~/components/Heading'
import Section from '~/components/Section'
import Media from '~/components/Media'
import Description from '~/components/Description'
import Table, { Row } from '~/components/Table'
import Grid from '~/components/Grid'

export default function Projects() {
  return (
    <Section>
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

      <Table>
        <Row
          id="rugby"
          title="Rugby"
          data={['GitHub', 'Node', 'Giphy']}
          href="https://github.com/superhighfives/rugby"
        />
        <Row
          id="iwnlyg"
          title="I Will Never Let You Go"
          data={['GitHub', 'Node', 'WebGL']}
          href="https://github.com/superhighfives/i-will-never-let-you-go"
        />
        <Row
          id="true"
          title="True"
          data={['GitHub', 'Node', 'Webaudio']}
          href="https://github.com/superhighfives/true"
        />
        <Row
          id="tweetflight"
          title="Tweetflight"
          data={['GitHub', 'Node', 'Ruby', 'Twitter']}
          href="https://github.com/superhighfives/rugby"
        />
        <Row
          id="beginnings-and-endings"
          title="Beginnings & Endings"
          data={['GitHub', 'Ruby']}
          href="https://github.com/superhighfives/beginnings-and-endings"
        />
      </Table>
    </Section>
  )
}
