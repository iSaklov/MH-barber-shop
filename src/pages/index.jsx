import PublicPage from '../components/PublicPage'
import { SEO } from '../components/SEO'
import '../styles/index.scss'

const IndexPage = () => {
  return <PublicPage />
}

export default IndexPage

export const Head = () => <SEO />
