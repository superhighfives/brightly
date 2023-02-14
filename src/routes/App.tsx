import { Outlet } from 'react-router-dom'
import Layout from '~/components/Layout'
import Logo from '~/components/Logo'
import Social from '~/sections/Social'

export default function App() {
  return (
    <Layout>
      <Logo />
      <Outlet />
      <Social />
    </Layout>
  )
}
