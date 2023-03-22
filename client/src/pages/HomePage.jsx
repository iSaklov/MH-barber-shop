import React from 'react'
import { default as Navbar } from '../components/Navbar'
import Header from '../components/Header'
import PriceList from '../components/PriceList'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <PriceList />
        <Gallery />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
