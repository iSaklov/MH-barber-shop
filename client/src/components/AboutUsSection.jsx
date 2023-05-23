import { Container, Row, Col } from 'react-bootstrap'

const AboutUsSection = () => {
  return (
    <section id="about-us-section" className="about-us-section">
      <Container className="d-flex my-auto justify-content-center">
        <Row className='py-5'>
          <Col
            xs={{ span: 10, offset: 1 }}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 6, offset: 6 }}
            className="about-us-section__article-wrapper"
          >
            <article className="about-us-section__article">
              <h2 className="heading-2 py-5">À propos</h2>
              <div className="px-5 pb-5">
                <p className="my-3">
                  Notre barber shop est l'un des plus prestigieux de la ville
                  d’épernon, grâce à notre expérience de plus de 20 ans dans
                  l'industrie de la coiffure.
                </p>
                <p className="my-5">
                  Nous sommes fiers de fournir à nos clients des coupes de
                  cheveux personnalisées et de qualité supérieure, en utilisant
                  les dernières techniques de coupe et de style.
                </p>
                <p className="my-3">
                  Nous sommes heureux de vous annoncer que notre barber shop
                  n'exige aucun rendez-vous préalable! Vous pouvez venir nous
                  voir quand cela vous convient le mieux et notre maître
                  coiffeur se fera un plaisir de vous accueillir.
                </p>
              </div>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUsSection
