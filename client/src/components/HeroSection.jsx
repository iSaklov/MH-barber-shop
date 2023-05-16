import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../assets/logo.svg'

const HeroSection = () => {
  return (
    <section id="hero-section" className="hero-section text-center">
      <Container>
        <Row className="mt-md-auto">
          <Col>
            <img
              src={Logo}
              className="hero-section__logo"
              alt="H.M. - barber shop logo"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="heading-3_header">Rapide</h3>
            <p className="paragraph__hero-section">
              Nous faisons notre travail rapidement sans compromettre la
              qualité, tout en respectant votre temps
            </p>
          </Col>
          <Col>
            <h3 className="heading-3_header">Élégant</h3>
            <p className="paragraph__hero-section">
              Nous prenons le temps de comprendre vos préférences et vos besoins
              pour créer une coupe qui vous convient parfaitement
            </p>
          </Col>
          <Col>
            <h3 className="heading-3_header">Impeccable</h3>
            <p className="paragraph__hero-section">
              Nous mettons en œuvre notre savoir-faire et notre expérience pour
              offrir une coupe de qualité supérieure
            </p>
          </Col>
        </Row>
        <Row className="d-none d-md-flex justify-content-md-center mt-md-auto">
          <Col lg={2}>
            <h5 className="heading-5">Adresse</h5>
            <p className="paragraph__hero-section">
              <a href="https://www.google.com/maps?q=###">
                3 rue du grand pont
              </a>
            </p>
          </Col>
          <Col lg={4}>
            <h5 className="heading-5">Téléphone</h5>
            <p className="paragraph__hero-section">
              <a href="tel:0624015691">06.24.01.56.91</a>
            </p>
          </Col>
          <Col lg={2}>
            <h5 className="heading-5">Horaires</h5>
            <p className="paragraph__hero-section">Mar-dim : 9h-19h</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection
