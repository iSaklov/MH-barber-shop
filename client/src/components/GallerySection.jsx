import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import models from '../data/models'

const GallerySection = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  let groupSize
  if (window.matchMedia('(max-width: 767.98px)').matches) {
    groupSize = 1
  } else if (window.matchMedia('(max-width: 991.98px)').matches) {
    groupSize = 2
  } else {
    groupSize = 3
  }

  const groupedModels = []
  for (let i = 0; i < models.length; i += groupSize) {
    groupedModels.push(models.slice(i, i + groupSize))
  }

  return (
    <section id="gallery-section" className="gallery-section">
      <Container className=" my-5">
        {/* <div className="gallery-section__content-wrapper"> */}
          <h2 className="heading-2">Gallérie</h2>
          <div className="gallery-section__carousel-wrapper">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              // indicators={false}
              defaultActiveIndex={0}
              interval={null}
              className="gallery-section__carousel"
            >
              {groupedModels.map((group, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-between gallery-section__slide-wrapper">
                    {group.map((item, itemIndex) => (
                      <img
                        key={`${index}-${itemIndex}`}
                        className="d-block mx-sm-auto mx-md-0 gallery-section__img"
                        src={item.src}
                        alt={`slide-${index}-${itemIndex}`}
                      />
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        {/* </div> */}
      </Container>
    </section>
  )
}

export default GallerySection
