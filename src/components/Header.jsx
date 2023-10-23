import { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Alert from 'react-bootstrap/Alert'
// eslint-disable-next-line import/no-named-default
import { default as Navbar } from './Navbar'
import HeroSection from './HeroSection'
import Info from '../assets/icons/ph_info-fill.svg'

const Header = ({ children }) => {
  const [showAlert, setShowAlert] = useState(true)

  return (
    <header className="header">
      <StaticImage
        className="header__background"
        src="../assets/images/nlk1ibifek1iqhrrqytb.webp"
        alt=""
        formats={['auto', 'webp']}
        layout="fullWidth"
        placeholder="dominantColor"
        loading="eager" // https://web.dev/lcp-lazy-loading/?utm_source=lighthouse&utm_medium=node
      />
      <Navbar />
      {showAlert && (
        <Alert
          variant="dark"
          onClose={() => setShowAlert(false)}
          dismissible
          // className="alert-fixed text-center"
          className="text-center"
        >
          <img
            src={Info}
            alt="icône d'information"
            className="info-icon d-none d-lg-inline-block"
            aria-label="icône d'information"
          />
          <Alert.Heading className="px-3">
            Notre barbershop vous accueille sans rendez-vous !
          </Alert.Heading>
          <hr className="d-lg-none" />
          <p>
            Profitez de nos services à tout moment dans l&apos;ordre de la file
            d&apos;attente
          </p>
        </Alert>
      )}
      <HeroSection />
      {children}
    </header>
  )
}

export default Header
