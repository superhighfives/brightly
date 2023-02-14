import { Outlet } from 'react-router-dom'
import Layout from '~/components/Layout'

export default function Page() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
