import {Col, Container, Row} from "react-bootstrap";
import Logo from '../assets/logo.svg'
import Map from '../assets/images/map.png'
import Bullet from '../assets/icons/ph_map-pin-fill.svg'
import Phone from "../assets/icons/ph_phone-fill.svg"
import Time from "../assets/icons/mingcute_time-fill.svg"
import Telegram from "../assets/icons/fa6-brands_telegram.svg"
import Linkedin from "../assets/icons/mdi_linkedin.svg"
import Mail from "../assets/icons/material-symbols_mail-rounded.svg"

const Footer = () => {
    return (
        <footer id="footer">
            <Container className='footer_container'>
                <Row id='contact'>
                    <Col md={12} className='contact_container'>
                        <img src={Logo} alt="logo"/>
                        <a href='/' className='contact_item'>
                            <img className='icon' src={Bullet} alt="bullet"/>
                            <div>3 rue du grand pont</div>
                        </a>
                        <a href='/' className='contact_item'>
                            <img className='icon' src={Phone} alt="phone"/>
                            <div>06.24.01.56.91</div>
                        </a>
                        <a href='/' className='contact_item'>
                            <img className='icon' src={Time} alt="time"/>
                            <div>mar-dim : 9h-19h</div>
                        </a>

                    </Col>
                </Row>
                <Row md={12} id='services'>
                    <Col md={12} className='services_container'>
                        <div className='title'>barber shop « M. H. »</div>
                        <div className='mt-3 title'>services</div>
                        <div>coiffure</div>
                        <div>barbe et rasage</div>
                        <div>coloration</div>
                        <div>soins capillaires</div>
                    </Col>
                </Row>
                <Row id='map'>
                        <img src={Map} alt="" style={{width: '100%'}}/>
                </Row>
                <div id='development'>
                    <div>design & développement : iSaklov</div>
                    <ul className='footer_nav'>
                        <li><a href=""><img className='icon' src={Mail} alt="mail"/></a></li>
                        <li><a href=""><img className='icon' src={Telegram} alt="telegram"/></a></li>
                        <li><a href=""><img className='icon' src={Linkedin} alt="linkedin"/></a></li>
                    </ul>
                    <div>© épernon 2023</div>
                    <div>tous droits réservés</div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
