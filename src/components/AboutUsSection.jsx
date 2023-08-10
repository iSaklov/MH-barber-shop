import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-bootstrap'

const AboutUsSection = () => {
  return (
    <section id="about-us-section" className="about-us-section py-5">
      <StaticImage
        className="about-us-section__background"
        src="../assets/images/about-us.webp"
        alt=""
        formats={['auto', 'webp', 'avif']}
      />
      <Container className="d-flex my-auto justify-content-center my-5">
        <Row className="py-5">
          <Col
            xs={{ span: 10, offset: 1 }}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 6, offset: 6 }}
            className="about-us-section__article-wrapper"
          >
            <article className="about-us-section__article">
              <h2 className="heading-2 py-5 text-center">À propos</h2>
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
