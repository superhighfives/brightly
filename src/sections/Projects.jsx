import Heading from '~/components/Heading'
import Section from '~/components/Section'
import Media from '~/components/Media'
import Description from '~/components/Description'
import GitHub from '~/components/GitHub'
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
    </Section>
  )
}
