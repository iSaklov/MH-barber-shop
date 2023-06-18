import { BrowserRouter } from 'react-router-dom'
// import { HashRouter } from 'react-router-dom'
import useRoutes from './routes'

function App() {
  const isAdmin = false
  const routes = useRoutes(isAdmin)

  return <BrowserRouter>{routes}</BrowserRouter>
  // return <HashRouter>{routes}</HashRouter>
}

export default App
