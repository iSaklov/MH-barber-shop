import Layout from './Layout'
import Main from './Main'
import PriceListSection from '../components/PriceListSection'
import GallerySection from './GallerySection'
import AboutUsSection from './AboutUsSection'

const PublicPage = () => {
  return (
    <Layout>
      <Main>
        <PriceListSection />
        <GallerySection />
        <AboutUsSection />
      </Main>
    </Layout>
  )
}

export default PublicPage
