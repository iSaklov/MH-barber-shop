import {Container} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import {useState} from "react";
// import fond1 from '../assets/images/fond01.png'
// import fond2 from '../assets/images/fond02.png'
// import fond3 from '../assets/images/fond03.png'
// import fond4 from '../assets/images/fond04.png'


const photos = [
    // {id: 1, src: fond1},
    // {id: 2, src: fond2},
    // {id: 3, src: fond3},
    // {id: 4, src: fond4},
];




const Gallery = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <section id="gallery">
            <Container className='gallery_container'>
                <h2 className='title'>GALLÉRIE </h2>
                <Carousel activeIndex={index}
                          onSelect={handleSelect}
                          indicators={false}
                          defaultActiveIndex={0}
                    // interval={null} свойство для отключения автоматической работы слайдера
                          className='mt-5'
                >
                    {/* {photos.map(photo =>
                        <Carousel.Item key={photo.id} className='carousel_item'>
                            <img
                                className="d-block w-100 _gallery_img"
                                src={photo.src}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    )} */}
                </Carousel>
            </Container>
        </section>
    )
}

export default Gallery
