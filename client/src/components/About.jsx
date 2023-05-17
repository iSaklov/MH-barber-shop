import { Container } from 'react-bootstrap'
// import Barber from '../assets/images/master.png'

const About = () => {
  return (
    <section id="about-us">
      <Container>
        <div className="about_container">
          {/* <img src={Barber} alt="master" /> */}
          <div className="about_inner">
            <h2 className="title">À propos</h2>
            <div className="about_text">
              <p>
                Notre barber shop est l'un des plus prestigieux de la ville,
                grâce à notre expérience de plus de 20 ans dans l'industrie de
                la coiffure.
              </p>
              <p>
                Notre maître coiffeur est un expert en la matière, ayant
                travaillé avec les clients les plus exigeants.
              </p>
              <p>
                Nous sommes fiers de fournir à nos clients des coupes de cheveux
                personnalisées et de qualité supérieure, en utilisant les
                dernières techniques de coupe et de style.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
