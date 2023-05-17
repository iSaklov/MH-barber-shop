import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../assets/logo.svg'
import Map from '../assets/icons/ph_map-pin-fill.svg'
import Phone from '../assets/icons/ph_phone-fill.svg'
import Time from '../assets/icons/mingcute_time-fill.svg'
import Telegram from '../assets/icons/fa6-brands_telegram.svg'
import Linkedin from '../assets/icons/mdi_linkedin.svg'
import Mail from '../assets/icons/material-symbols_mail-rounded.svg'

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <Container className="py-5">
        <Row className="text-center my-5">
          <Col>
            <a href="#hero-section">
              <img
                src={Logo}
                className="footer__logo"
                alt="H.M. - barber shop logo"
              />
            </a>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={4}>
            <h1 className="heading-1">Barber shop « M. H. »</h1>
            <ul className="footer__contact-list my-5">
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
                  <span>3 rue du grand pont</span>
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
                  <span>06.24.01.56.91</span>
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
                  <span>Mar-dim : 9h-19h</span>
                </div>
              </li>
            </ul>
            <div className="footer__services-list-wrapper">
              <h6 className="heading-6 mt-5 mb-4">Services</h6>
              <ul className="footer__services-list">
                <li className="my-1">Coupe de cheveux homme</li>
                <li className="my-1">Barbe et rasage</li>
                <li className="my-1">Coupe de cheveux enfant</li>
                <li className="my-1">Coloration</li>
                <li className="my-1">Soins capillaires</li>
              </ul>
            </div>
          </Col>
          <Col className="footer__map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1319.0334107676479!2d1.6777256494564767!3d48.608564189201324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e41921ad4d5887%3A0x97dd029c36690686!2sM.H.%20-%20barber%20shop!5e0!3m2!1sfr!2sfr!4v1684333039052!5m2!1sfr!2sfr"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title='Adresse du salon de coiffure "M.H. - barber shop'
              className="footer__map"
            ></iframe>
            <div className="footer__map-overlay"></div>
          </Col>
        </Row>
        <Row className="my-5 text-center">
          <Col>
            <h6 className="heading-6">
              Notre barber shop n'exige <strong>aucun rendez-vous</strong>{' '}
              préalable !
            </h6>
          </Col>
        </Row>
        <Row className="my-5 text-center">
          <Col>
            <span>Design & développement : iSaklov</span>
          </Col>
        </Row>
        <Row className="">
          <Col>
            <ul className="footer__developer-contacts-list d-flex justify-content-center">
              <li className="mx-3">
                <a
                  href="mailto:ivansaklov@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <img
                    src={Mail}
                    alt="adresse mail du développeur du site"
                    className="icon"
                    aria-label="adresse mail du développeur du site"
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
                    alt="profil Telegram du développeur du site"
                    className="icon"
                    aria-label="profil Telegram du développeur du site"
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
                    alt="profil Linkedin du développeur du site"
                    className="icon"
                    aria-label="profil Linkedin du développeur du site"
                  />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center mt-5">
          <Col>
            <p>© Épernon 2023</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p>Tous droits réservés</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
