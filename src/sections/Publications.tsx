import Heading from '~/components/Heading'
import Section from '~/components/Section'
import Table, { Row } from '~/components/Table'
import { ReactComponent as NMELogo } from '~/assets/logo-nme.svg'

export default function Publications() {
  return (
    <Section>
      <Heading>Reviews and Media</Heading>

      <blockquote className="pl-2 grid gap-4">
        "His songs might kick off sounding like formulaic indie folk, but
        Melbourne’s Charlie Gleason writes such heartbreaking lyrics it’s hard
        not to indulge yourself. With its mix of folk, pop and electronica,
        debut album ‘Oh, Infinity’ is a profound collection of tracks with a
        stellar lineup of Melbourne musicians behind it."
        <div className="grid gap-2">
          <NMELogo className="block dark:text-yellow-600" />
          <cite className="-ml-3 font-semibold text-2xs dark:text-yellow-600">
            —Review of "Oh, Infinity"
          </cite>
        </div>
      </blockquote>

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
    </Section>
  )
}
