import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import useScrollToLink from '../hooks/useScrollToLink'
import Logo from '../assets/logo.svg'
import Map from '../assets/icons/ph_map-pin-fill.svg'
import Phone from '../assets/icons/ph_phone-fill.svg'
import Time from '../assets/icons/mingcute_time-fill.svg'
import Telegram from '../assets/icons/fa6-brands_telegram.svg'
import Linkedin from '../assets/icons/mdi_linkedin.svg'
import Mail from '../assets/icons/material-symbols_mail-rounded.svg'

const Footer = () => {
  const handleLinkClick = useScrollToLink()

  return (
    <footer id="footer" className="footer">
      <StaticImage
        className="footer__background"
        src="../assets/images/apothecary-87-Wg3J83R1YSQ-unsplash.webp"
        alt=""
        formats={['auto', 'webp']}
        layout="fullWidth"
        placeholder="dominantColor"
        loading="eager"
      />
      <Container className="py-5">
        <Row className="text-center my-5">
          <Col>
            <Nav.Link
              href="#hero-section"
              onClick={handleLinkClick}
              aria-label="Accueil"
            >
              <img
                src={Logo}
                alt="H.M. - barber shop logo"
                className="footer__logo"
              />
            </Nav.Link>
          </Col>
        </Row>
        <Row className="text-xs-center text-md-left my-5 flex-md-row">
          <Col xs={12} md={4} xl={3}>
            <Col className="my-3">
              <h1 className="heading-1">Barber shop « M. H. »</h1>
            </Col>
            <Col className="my-3">
              <ul className="footer__contact-list">
                <li className="my-3">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=3+rue+du+grand+pont"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="footer__contact-item d-flex align-items-center"
                  >
                    <img
                      src={Map}
                      alt="Adresse de notre barber shop"
                      className="icon"
                      aria-label="Adresse de notre barber shop"
                    />
                    <span className="heading-6">3 rue du grand pont</span>
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="tel:0624015691"
                    rel="noopener noreferrer nofollow"
                    className="footer__contact-item d-flex align-items-center"
                  >
                    <img
                      src={Phone}
                      alt="Numéro de téléphone du barber shop"
                      className="icon"
                      aria-label="Numéro de téléphone du barber shop"
                    />
                    <span className="heading-6">06.24.01.56.91</span>
                  </a>
                </li>
                <li className="my-3">
                  <div className="footer__contact-item d-flex align-items-center">
                    <img
                      src={Time}
                      alt="Heures d'ouverture du barber shop"
                      className="icon"
                      aria-label="Heures d'ouverture du barber shop"
                    />
                    <span className="heading-6">Mar-dim : 9h-19h</span>
                  </div>
                </li>
              </ul>
            </Col>
            <Col className="my-3">
              <div className="footer__services-list-wrapper">
                <span className="heading-6 mb-3 text-center d-block">
                  Services
                </span>
                <ul className="footer__services-list">
                  <li className="my-1">Coupe de cheveux homme</li>
                  <li className="my-1">Barbe et rasage</li>
                  <li className="my-1">Coupe de cheveux enfant</li>
                  <li className="my-1">Coloration</li>
                  <li className="my-1">Soins capillaires</li>
                </ul>
              </div>
            </Col>
          </Col>
          <Col className="my-3">
            <div className="footer__map-wrapper">
              <iframe
                src={`https://www.google.com/maps/embed?key=${process.env.GATSBY_MAPS_API_KEY}&pb=!1m18!1m12!1m3!1d1319.0334107676479!2d1.6777256494564767!3d48.608564189201324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e41921ad4d5887%3A0x97dd029c36690686!2sM.H.%20-%20barber%20shop!5e0!3m2!1sfr!2sfr!4v1684333039052!5m2!1sfr!2sfr`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title='Adresse du salon de coiffure "M.H. - barber shop"'
                className="footer__map"
              />
              <div className="footer__map-overlay" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 10, offset: 1 }} className="my-3 text-center">
            <span className="heading-6 d-block">
              Notre barber shop n&apos;exige <strong>aucun rendez-vous</strong>{' '}
              préalable !
            </span>
          </Col>
        </Row>
        <Row className="my-5">
          <Col xs={12} md={6}>
            <span className="heading-6 d-block text-center mb-3">
              Identification de l&apos;entreprise
            </span>
            <p>Dénomination sociale : BARBA&apos;S VIP</p>
            <p>
              Forme juridique : SASU (Société par actions simplifiée à associé
              unique)
            </p>
            <p>Montant du capital social : 250,00€</p>
            <p>Numéro RCS : Chartres B 919 040 832</p>
            <p>Numéro TVA intracommunautaire : FR37919040832</p>
          </Col>
          <Col xs={12} md={6}>
            <span className="heading-6 d-block text-center mb-3">
              Identité de l&apos;hébergeur
            </span>
            <p>Dénomination sociale : Gatsby, Inc.</p>
            <p>
              548 Market Street, Bureau 36791, San Francisco, 94104 Californie
            </p>
            <p>
              <a
                href="https://www.gatsbyjs.com/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Politique de confidentialité de Gatsby (en anglais)
              </a>
            </p>
            <p>
              <a
                href="mailto:privacy@gatsbyjs.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Contacter l&apos;hébergeur par email
              </a>
            </p>
          </Col>
        </Row>
        <Row className="text-center my-5">
          <Col xs={12}>
            <span>Design & développement : iSaklov</span>
          </Col>
          <Col className="my-3">
            <ul className="footer__developer-contacts-list d-flex justify-content-center">
              <li className="mx-3">
                <a
                  href="mailto:ivansaklov@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <img
                    src={Mail}
                    alt="Adresse mail du développeur du site"
                    className="icon"
                    aria-label="Adresse mail du développeur du site"
                  />
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="https://t.me/iSaklov"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <img
                    src={Telegram}
                    alt="Profil Telegram du développeur du site"
                    className="icon"
                    aria-label="Profil Telegram du développeur du site"
                  />
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="https://www.linkedin.com/in/aleh-smaliakou/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <img
                    src={Linkedin}
                    alt="Profil Linkedin du développeur du site"
                    className="icon"
                    aria-label="Profil Linkedin du développeur du site"
                  />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center my-5">
          <Col xs={12}>
            <p>© Épernon 2023</p>
          </Col>
          <Col xs={12}>
            <p>Tous droits réservés</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
