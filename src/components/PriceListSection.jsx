import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../assets/logo.svg'
import PriceList from '../data/price-list'

const PriceListSection = () => {
  return (
    <section id="price-list-section" className="price-list-section py-5">
      <StaticImage
        className="price-list-section__background"
        src="../assets/images/price-list.webp"
        alt=""
        formats={['auto', 'webp']}
        layout="fullWidth"
        placeholder="dominantColor"
      />
      <Container className="d-flex my-auto justify-content-center py-5">
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
                <h2 className="heading-2 text-center">Nos tarifs</h2>
              </Col>
            </Row>
            {PriceList.map((item, index) => (
              <React.Fragment key={index}>
                <Row className="align-items-end my-4 price-list-section__service-item-wrapper">
                  <Col className="price-list-section__item-title col-auto">
                    <h3 className="heading-4 mb-0">{item.title}</h3>
                  </Col>
                  <Col className="px-0">
                    <div className="price-list-section__separator"></div>
                  </Col>
                  <Col className="price-list-section__item-price col-auto">
                    <h3 className="heading-4 mb-0">{item.price}€</h3>
                  </Col>
                  {item.subtitle && (
                    <Col
                      xs={12}
                      className="price-list-section__item-price-subtitle-wrapper"
                    >
                      <span className="price-list-section__item-price-subtitle">
                        {item.subtitle}
                      </span>
                    </Col>
                  )}
                </Row>
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PriceListSection
