import Intro from '~/sections/Intro'
import Listen from '~/sections/Listen'
import Discography from '~/sections/Discography'
import Projects from '~/sections/Projects'
import Publications from '~/sections/Publications'

export default function IndexPage() {
  return (
    <>
      <Intro />
      <Listen />
      <Discography />
      <Projects />
      <Publications />
    </>
  )
}
