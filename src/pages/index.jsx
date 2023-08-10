import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
// import { HashRouter } from 'react-router-dom'
import useRoutes from '../routes'
import '../styles/index.scss'

const IndexPage = () => {
  const isAdmin = false
  const routes = useRoutes(isAdmin)

  return <BrowserRouter>{routes}</BrowserRouter>
  // return <HashRouter>{routes}</HashRouter>
}

export default IndexPage

export const Head = () => <title>M.H. - barber shop</title>
