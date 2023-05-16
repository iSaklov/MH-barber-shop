import Header from '../components/Header'
import { default as Navbar } from '../components/Navbar'
import PriceList from '../components/PriceList'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import ContainerSection from '../components/ContainerSection'

const HomePage = () => {
  return (
    <>
			<Header />

      {/* <header className="header d-flex flex-column justify-content-between">
        <Navbar />
        <div className="flex-grow-1">
          <HeroSection />
          <div className="mt-auto">
            <Row className="justify-content-center text-center">
              <Col>
                <h5 className="heading-5">Adresse</h5>
                <p>
                  <a href="https://www.google.com/maps?q=###">
                    3 rue du grand pont
                  </a>
                </p>
              </Col>
              <Col>
                <h5 className="heading-5">Téléphone</h5>
                <p>
                  <a href="tel:0624015691">06.24.01.56.91</a>
                </p>
              </Col>
              <Col>
                <h5 className="heading-5">Horaires</h5>
                <p>Mar-dim : 9h-19h</p>
              </Col>
            </Row>
          </div>
        </div>
			</header> */}

      <main className="main">
        {/* <PriceList /> */}
        {/* <ContainerSection>
          <Gallery />
          <About />
        </ContainerSection> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default HomePage
