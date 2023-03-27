import {Container, Row, Col} from 'react-bootstrap'
import Logo from '../assets/logo.svg'


const GeneralSection = () => {
    return (
        <section id="general" className="text-center">
            <Container>
                <div className='container-item'>
                    <Row className="mb">
                        <Col>
                            <img src={Logo} className="_logo" alt="H.M. - barber shop logo"/>
                        </Col>
                    </Row>
                    <Row className="mt">
                        <Col md={4} className="mt-5 my-md-0">
                            <h3 className='ellipse'>Rapide</h3>
                            <p>
                                Nous faisons notre travail rapidement sans compromettre la
                                qualité, tout en respectant votre temps
                            </p>
                        </Col>
                        <Col md={4} className="mt-5 my-md-0">
                            <h3 className='ellipse'>Élégant</h3>
                            <p>
                                Nous prenons le temps de comprendre vos préférences et vos besoins
                                pour créer une coupe qui vous convient parfaitement
                            </p>
                        </Col>
                        <Col md={4} className="mt-5 my-md-0">
                            <h3 className='ellipse'>Impeccable</h3>
                            <p>
                                Nous mettons en œuvre notre savoir-faire et notre expérience pour
                                offrir une coupe de qualité supérieure
                            </p>
                        </Col>
                    </Row>
                </div>
                <Row className="d-none d-md-flex">
                    <Col>
                        <h4>Adresse</h4>
                        <p>3 rue du grand pont</p>
                    </Col>
                    <Col>
                        <h4>Téléphone</h4>
                        <p>06.24.01.56.91</p>
                    </Col>
                    <Col>
                        <h4>Horaires</h4>
                        <p>mar-dim : 9h-19h</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default GeneralSection
