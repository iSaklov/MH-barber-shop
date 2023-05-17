import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../assets/logo.svg'
import services from '../data/services'

const PriceListSection = () => {
  return (
    <section id="price-list-section" className="price-list-section">
      <Container className="d-flex my-auto justify-content-center">
        <div className="price-list-section__list-wrapper">
          <div className="price-list-section__list-inner">
            <Row className="text-center my-3">
              <Col>
                <img
                  src={Logo}
                  className="price-list-section__logo"
                  alt="H.M. - barber shop logo"
                />
              </Col>
            </Row>
            <Row className="mt-5 mb-2">
              <Col>
                <h2 className="heading-2">Nos tarifs</h2>
              </Col>
            </Row>
            {services.map((item, index) => (
              <>
                <Row key={index} className="align-items-end mt-3">
                  <Col className="price-list-section__item-title">
                    <h4 className="heading-4 mb-0">{item.title}</h4>
                  </Col>
                  <Col className="px-0">
                    <div className="price-list-section__separator"></div>
                  </Col>
                  <Col className="price-list-section__item-price">
                    <h4 className="heading-4">{item.price}€</h4>
                  </Col>
                </Row>
                {item.subtitle && (
                  <Row>
                    <Col>
                      <span className="price-list-section__item-price-subtitle">
                        {item.subtitle}
                      </span>
                    </Col>
                  </Row>
                )}
              </>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PriceListSection
