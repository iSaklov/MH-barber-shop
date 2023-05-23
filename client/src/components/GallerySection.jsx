import { useEffect, useState, useCallback } from 'react'
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

  const getGroupSize = useCallback(() => {
    if (window.matchMedia('(max-width: 767.98px)').matches) {
      return 1
    } else if (window.matchMedia('(max-width: 991.98px)').matches) {
      return 2
    } else {
      return 3
    }
  }, [])

  const [isAnimating, setIsAnimating] = useState(false)
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('')
  const [groupSize, setGroupSize] = useState(getGroupSize())

  useEffect(() => {
    const backgroundImage = new Image()
    backgroundImage.onload = () => {
      setIsAnimating(true)
      setBackgroundImageUrl(backgroundImages[indexBackground].src)
    }

    backgroundImage.src = backgroundImages[indexBackground].src
  }, [indexBackground])

  useEffect(() => {
    setBackgroundImageUrl(backgroundImages[indexBackground].src)
  }, [indexBackground])

  useEffect(() => {
    function handleResize() {
      setGroupSize(getGroupSize())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [getGroupSize])

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

  const groupedModels = models.reduce((acc, curr, index) => {
    const groupIndex = Math.floor(index / groupSize)
    if (!acc[groupIndex]) {
      acc[groupIndex] = []
    }
    acc[groupIndex].push(curr)
    return acc
  }, [])

  return (
    <section
      id="gallery-section"
      className={`gallery-section ${isAnimating ? 'animating' : ''}`}
      onTransitionEnd={handleTransitionEnd}
      style={{
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
            {groupedModels.map((group, groupIndex) => (
              <Carousel.Item key={groupIndex}>
                <div className="d-flex justify-content-between gallery-section__slide-wrapper">
                  {group.map((item, itemIndex) => (
                    <img
                      key={`${groupIndex}-${itemIndex}`}
                      className="d-block mx-sm-auto mx-md-0 gallery-section__img"
                      src={item.src}
                      alt={`slide-${groupIndex}-${itemIndex}`}
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
