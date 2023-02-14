import Intro from '~/sections/Intro'
import Listen from '~/sections/Listen'
import Records from '~/sections/Records'
import Singles from '~/sections/Singles'
import Projects from '~/sections/Projects'
import Publications from '~/sections/Publications'

export default function IndexPage() {
  return (
    <>
      <Intro />
      <Listen />
      <Records />
      <Singles />
      <Projects />
      <Publications />
    </>
  )
}
