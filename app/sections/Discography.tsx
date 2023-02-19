import Grid from '@/app/components/Grid'
import Tags, { Tag } from '@/app/components/Tags'
import Heading from '@/app/components/Heading'
import Section from '@/app/components/Section'
import Group from '@/app/components/Group'
import Media from '@/app/components/Media'
import Table, { Row } from '@/app/components/Table'

export default function Discography() {
  return (
    <Section>
      <Group>
        <Heading>Discography</Heading>
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
            title="One For Sorrow, Two For&nbsp;Joy"
            href="https://wearebrightly.bandcamp.com/album/one-for-sorrow-two-for-joy"
            type="record"
          >
            <Tags>
              <Tag>2016</Tag>
              <Tag>Album</Tag>
            </Tags>
          </Media>
        </Grid>
      </Group>

      <Group size="sm">
        <Heading size="sm">Singles and releases</Heading>
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
            id="doubt-ktsche-remix"
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
      </Group>
    </Section>
  )
}
