import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { default as Navbar } from './Navbar'
import HeroSection from './HeroSection'

const Header = () => {
  return (
    <header className="header">
      <StaticImage
        className="header__background"
        src="../assets/images/header.webp"
        alt=""
        formats={['auto', 'webp', 'avif']}
        layout="fullWidth"
        placeholder="dominantColor"
      />
      <Navbar />
      <HeroSection />
    </header>
  )
}

export default Header