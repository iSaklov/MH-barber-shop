import { default as Navbar } from '../components/Navbar'
import PriceList from '../components/PriceList'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Footer from '../components/Footer'
import GeneralSection from '../components/GeneralSection'
import ContainerSection from '../components/ContainerSection'

const HomePage = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <Navbar />
        <GeneralSection />
      </header>
      <main className="main">
        <PriceList />
        <ContainerSection>
          <Gallery />
          <About />
        </ContainerSection>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
