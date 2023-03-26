import {default as Navbar} from '../components/Navbar'

import PriceList from '../components/PriceList'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Footer from '../components/Footer'
import GeneralSection from "../components/GeneralSection";

const HomePage = () => {
    return (
        <div className='wrapper'>
            <Navbar/>
            <main className='main'>
                <GeneralSection/>
                <PriceList/>
                <Gallery/>
                <About/>
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage
