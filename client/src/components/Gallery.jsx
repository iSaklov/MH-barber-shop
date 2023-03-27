import {Container} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import {useState} from "react";


const photos = [
    {id: 1, src: 'https://i.pinimg.com/originals/8a/de/fe/8adefe5af862b4f9cec286c6ee4722cb.jpg'},
    {id: 2, src: 'https://i.pinimg.com/236x/f7/64/3c/f7643c98316fd7af6dd2d0f034f4bd94--polar-bear-cubs-illustrations.jpg'},
    {id: 3, src: 'https://avatars.mds.yandex.net/i?id=6a8597b61147eda12bb8d1bacf7e0c7603e6903f-7937305-images-thumbs&n=13'},
    {id: 4, src: 'https://avatars.mds.yandex.net/i?id=8d83b5a08dcb8b94b1fee704904092ba7b69a7e4-8201364-images-thumbs&n=13'},
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
                    {photos.map(photo =>
                        <Carousel.Item key={photo.id} className='carousel_item'>
                            <img
                                className="d-block w-100 _gallery_img"
                                src={photo.src}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    )}
                </Carousel>
            </Container>
        </section>
    )
}

export default Gallery
