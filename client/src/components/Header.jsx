import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <section id="header" className="text-center">
      <Container>
        <Row>
          <Col>
            <img src={Logo} className="_logo" alt="H.M. - barber shop logo" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Rapide</h3>
            <p>
              Nous faisons notre travail rapidement sans compromettre la
              qualité, tout en respectant votre temps
            </p>
          </Col>
          <Col>
            <h3>Élégant</h3>
            <p>
              Nous prenons le temps de comprendre vos préférences et vos besoins
              pour créer une coupe qui vous convient parfaitement
            </p>
          </Col>
          <Col>
            <h3>Impeccable</h3>
            <p>
              Nous mettons en œuvre notre savoir-faire et notre expérience pour
              offrir une coupe de qualité supérieure
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Adresse</h4>
            <p>3 rue du grand pont</p>
          </Col>
          <Col>
            <h4>Téléphone</h4>
            <p>06.24.01.56.91</p>
          </Col>
          <Col>
            <h4>Horaires</h4>
            <p>Mar-Dim : 9h-19h</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Header
