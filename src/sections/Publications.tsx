import Heading from '~/components/Heading'
import Section from '~/components/Section'
import Group from '~/components/Group'
import Table, { Row } from '~/components/Table'
import { ReactComponent as NMELogo } from '~/assets/logo-nme.svg'

export default function Publications() {
  return (
    <Section>
      <Group>
        <Heading>Reviews and Media</Heading>

        <blockquote className="pl-2 grid gap-2">
          "[...] Charlie Gleason writes such heartbreaking lyrics it’s hard not
          to indulge yourself. With its mix of folk, pop and electronica, [...]
          ‘Oh, Infinity’ is a profound collection of tracks with a stellar
          lineup of Melbourne musicians behind it."
          <div className="flex gap-6 items-center">
            <NMELogo aria-label="NME" className="block dark:text-yellow-500" />
            <cite className="-ml-3 font-semibold text-2xs dark:text-yellow-600">
              —"Oh, Infinity" review
            </cite>
          </div>
        </blockquote>
      </Group>

      <Group size="sm">
        <Heading size="sm">Publications and Coverage</Heading>
        <Table>
          <Row
            id="rugby"
            title="Rugby"
            data={['2016', 'One For Sorrow, Two For Joy']}
            href="https://rugby.wearebrightly.com/"
          />
          <Row
            id="another-rugby"
            title="Review"
            data={['2016', 'One For Sorrow, Two For Joy']}
            href="https://rugby.wearebrightly.com/"
          />
        </Table>
      </Group>
    </Section>
  )
}
