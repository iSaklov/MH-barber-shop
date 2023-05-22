import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import models from '../data/models'
import backgroundImages from '../data/gallery-background-images'

const GallerySection = () => {
  const [index, setIndex] = useState(0)
  const [indexBackground, setIndexBackground] = useState(
    // sets the center slide as active background images
    Math.ceil((backgroundImages.length - 1) / 2)
  )

  const [isAnimating, setIsAnimating] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('')

  useEffect(() => {
    const backgroundImage = new Image()
    backgroundImage.onload = () => {
			setIsLoading(false)
			setIsAnimating(true)
      setBackgroundImageUrl(backgroundImages[indexBackground].src)
    }

    backgroundImage.src = backgroundImages[indexBackground].src
  }, [indexBackground])

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  const handlePrevBackground = () => {
    if (indexBackground > 0 && !isAnimating) {
      setIsAnimating(true)
      setIndexBackground(indexBackground - 1)
    }
  }

  const handleNextBackground = () => {
    if (indexBackground < backgroundImages.length - 1 && !isAnimating) {
      setIsAnimating(true)
      setIndexBackground(indexBackground + 1)
    }
  }

  const handleTransitionEnd = () => {
    console.log('transition end')
    setIsAnimating(false)
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
    <section
      id="gallery-section"
      // className="gallery-section"
      className={`gallery-section ${isAnimating ? 'animating' : ''}`}
      onTransitionEnd={handleTransitionEnd}
      style={{
        // backgroundImage: `url(${backgroundImages[indexBackground].src})`
        backgroundImage: `url(${backgroundImageUrl})`
      }}
    >
      <Container className="my-5">
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
        <div className="gallery-section__background-navigation">
          <button
            className={`gallery-section__background-prev-button ${
              indexBackground !== 0 ? '' : 'disabled'
            }`}
            onClick={handlePrevBackground}
          ></button>
          <div className="gallery-section__carousel-background-indicators">
            {backgroundImages.map((item, index) => (
              <button
                key={index}
                aria-label={item.src}
                aria-current={indexBackground !== index ? 'false' : 'true'}
                className={`button mx-2 ${
                  indexBackground !== index ? '' : 'active'
                }`}
                onClick={setIndexBackground.bind(null, index)}
              ></button>
            ))}
          </div>
          <button
            className={`gallery-section__background-next-button ${
              indexBackground !== backgroundImages.length - 1 ? '' : 'disabled'
            }`}
            onClick={handleNextBackground}
          ></button>
        </div>
      </Container>
    </section>
  )
}

export default GallerySection
