import App from '~/routes/App'
import Page from '~/routes/Page'
import Error from '~/routes/Error'
import About from '~/pages/About.mdx'
import Index from '~/pages/Index'

import { createBrowserRouter } from 'react-router-dom'

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        element: <Page />,
        children: [
          {
            path: 'about',
            element: <About />,
          },
        ],
      },
    ],
  },
])
