import React from 'react'
import { default as Navbar } from './components/Navbar'
import Header from './components/Header'
import PriceList from './components/PriceList'
import Gallery from './components/Gallery'
import About from './components/About'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <PriceList />
      <Gallery />
      <About />
      <Footer />
    </>
  )
}

export default App
