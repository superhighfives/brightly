import Heading from '~/components/Heading'
import Section from '~/components/Section'
import Table, { Row } from '~/components/Table'

export default function Singles() {
  return (
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
  )
}
