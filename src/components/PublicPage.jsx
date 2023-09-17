import Layout from './Layout'
import Main from './Main'
import PriceListSection from './PriceListSection'
import GallerySection from './GallerySection'
import AboutUsSection from './AboutUsSection'

const PublicPage = () => (
  <Layout>
    <Main>
      <PriceListSection />
      <GallerySection />
      <AboutUsSection />
    </Main>
  </Layout>
)

export default PublicPage
