import { default as Navbar } from './Navbar'
import HeroSection from './HeroSection'

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <HeroSection />
    </header>
  )
}

export default Header
