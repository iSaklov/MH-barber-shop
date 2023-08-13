import { StaticImage } from 'gatsby-plugin-image'
import { default as Navbar } from './Navbar'
import HeroSection from './HeroSection'

const Header = ({ children }) => {
  return (
    <header className="header">
      <StaticImage
        className="header__background"
        src="../assets/images/header.webp"
        alt=""
        formats={['auto', 'webp']}
        layout="fullWidth"
        placeholder="dominantColor"
        loading="eager" // https://web.dev/lcp-lazy-loading/?utm_source=lighthouse&utm_medium=node
      />
      <Navbar />
      <HeroSection />
      {children}
    </header>
  )
}

export default Header
