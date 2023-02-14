import Grid from '~/components/Grid'
import Tags, { Tag } from '~/components/Tags'
import Heading from '~/components/Heading'
import Section from '~/components/Section'
import Media from '~/components/Media'

export default function Records() {
  return (
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
  )
}
