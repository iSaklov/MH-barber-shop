import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../assets/logo.svg'

const HeroSection = () => {
  return (
    <section id="hero-section" className="hero-section text-center">
      <Container className='my-5'>
        <Row className="mt-5 mt-md-auto">
          <Col>
            <img
              src={Logo}
              className="hero-section__logo"
              alt="H.M. - barber shop logo"
            />
          </Col>
        </Row>
        <Row className="my-5 flex-column flex-md-row hero-section__middle-row">
          <Col className="my-3">
            <h3 className="hero-section__heading-3">Rapide</h3>
            <p className="hero-section__paragraph">
              Nous faisons notre travail rapidement sans compromettre la
              qualité, tout en respectant votre temps
            </p>
          </Col>
          <Col className="my-3">
            <h3 className="hero-section__heading-3">Élégant</h3>
            <p className="hero-section__paragraph">
              Nous prenons le temps de comprendre vos préférences et vos besoins
              pour créer une coupe qui vous convient parfaitement
            </p>
          </Col>
          <Col md={12} lg={4} className="my-3">
            <h3 className="hero-section__heading-3">Impeccable</h3>
            <p className="hero-section__paragraph">
              Nous mettons en œuvre notre savoir-faire et notre expérience pour
              offrir une coupe de qualité supérieure
            </p>
          </Col>
        </Row>
        <Row className="d-none d-md-flex justify-content-md-center mb-md-3 mt-md-auto">
          <Col md={3}>
            <h5 className="heading-5">Adresse</h5>
            <h6 className="heading-6">
              <a
                href="https://www.google.com/maps/search/?api=1&query=3+rue+du+grand+pont"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                3 rue du grand pont
              </a>
            </h6>
          </Col>
          <Col md={4}>
            <h5 className="heading-5">Téléphone</h5>
            <h6 className="heading-6">
              <a href="tel:0624015691" rel="noopener noreferrer nofollow">
                06.24.01.56.91
              </a>
            </h6>
          </Col>
          <Col md={3}>
            <h5 className="heading-5">Horaires</h5>
            <h6 className="heading-6">Mar-dim : 9h-19h</h6>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection
