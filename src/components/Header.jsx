import { StaticImage } from 'gatsby-plugin-image'
import { Alert } from 'react-bootstrap'
// eslint-disable-next-line import/no-named-default
import { default as Navbar } from './Navbar'
import HeroSection from './HeroSection'
import Info from '../assets/icons/ph_info-fill.svg'

const Header = ({ children }) => (
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
    <Alert variant="dark" className="alert-fixed text-center" dismissible>
      <img
        src={Info}
        alt="icône d'information"
        className="info-icon d-none d-lg-inline-block"
        aria-label="icône d'information"
      />
      <Alert.Heading>
        Notre barbershop vous accueille sans rendez-vous !
      </Alert.Heading>
      <p>
        Profitez de nos services à tout moment dans l&apos;ordre de la file
        d&apos;attente
      </p>
    </Alert>
    <HeroSection />
    {children}
  </header>
)

export default Header
