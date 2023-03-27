import {Col, Container, Row} from "react-bootstrap";
import Logo from "../assets/logo.svg";


const prices = [
    {id: 1, name: 'TAILLAGE BARBE', note: '', cost: 5},
    {id: 2, name: 'COUPE ENFANT', note: '', cost: 9},
    {id: 3, name: 'COUPE ADULTE', note: '', cost: 10},
    {id: 4, name: 'COUPE + BARBE', note: '', cost: 14},
    {id: 5, name: 'COUPE COULEUR', note: 'à partir de', cost: 45},
]

const PriceList = () => {
    return (
        <section id="price-list">
            <Container className='price-container'>
                <div className='price-card'>
                    <div className='inner-card'>
                        <Row className="mb">
                            <Col>
                                <img src={Logo} className="_logo" alt="H.M. - barber shop logo"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2>NOS TARIFS</h2>
                            </Col>
                        </Row>
                        {prices.map(price =>
                            <Container key={price.id} className="mb">
                                <Row className='service'>
                                    <Col className='service_name'>{price.name}</Col>
                                    <Col>{price.cost}€</Col>
                                </Row>
                                {price.note && <Row> <p className='note'>{`(${price.note})`}</p></Row>}
                            </Container>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default PriceList
