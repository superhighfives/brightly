import Heading from '~/components/Heading'
import Section from '~/components/Section'
import Group from '~/components/Group'
import Table from '~/components/Table'
import { Article } from '~/components/Article'
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
          <Article
            type="Feature"
            publication="Zealous"
            title="Making Sad Songs You Can Dance To"
            href="https://zealous.co/about/archive-2/features-archive/charlie-gleason-electronic-folk-music/"
          />
          <Article
            type="Premiere"
            publication="Tone Deaf"
            title="Brightly Unveils Stunning New LP"
            href="https://tonedeaf.thebrag.com/premiere-brightly-unveils-stunning-new-lp-one-for-sorrow-two-for-joy/"
          />
          <Article
            type="Feature"
            publication="Tone Deaf"
            title="The 7 Local Records You Should Be Listening To This Week"
            href="https://tonedeaf.thebrag.com/the-7-local-records-you-should-be-listening-to-this-week-7/"
          />
          <Article
            type="Premiere"
            publication="Happy Mag"
            title="Feelin’ dirty?"
            href="https://happymag.tv/feelin-dirty-brightly-writes-about-sex-death-privilege-and-ball-sports-on-rugby/"
          />
          <Article
            type="Review"
            publication="AAA Backstage"
            title="One For Sorrow, Two For Joy"
            href="https://aaabackstage.com/album-review-brightly-one-for-sorrow-two-for-joy/"
          />

          <Article
            type="Review"
            publication="Renowned For Sound"
            title="One For Sorrow, Two For Joy"
            href="https://renownedforsound.com/album-review-brightly-one-for-sorrow-two-for-joy/"
          />
          <Article
            type="Review"
            publication="Pop Rinse Repeat"
            title="One For Sorrow, Two For Joy"
            href="http://www.poprinserepeat.com/2016/06/meet-brightly.html?m=1"
          />

          {/*
          <Article
            type=""
            publication=""
            title=""
            href=""
          />
          */}
        </Table>
      </Group>
    </Section>
  )
}
