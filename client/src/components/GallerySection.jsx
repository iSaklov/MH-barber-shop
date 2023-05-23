import { useEffect, useState, useCallback } from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import models from '../data/models'
import backgroundImages from '../data/gallery-background-images'

const GallerySection = () => {
  const [index, setIndex] = useState(0)
  const [indexBackground, setIndexBackground] = useState(0)
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('')
  const [backgroundImageLoading, setBackgroundImageLoading] = useState(true)
  const [groupSize, setGroupSize] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  const handlePrevBackground = useCallback(() => {
    if (indexBackground > 0 && !isAnimating) {
      setIndexBackground(indexBackground - 1)
    }
  }, [indexBackground, isAnimating])

  const handleNextBackground = useCallback(() => {
    if (indexBackground < backgroundImages.length - 1 && !isAnimating) {
      setIndexBackground(indexBackground + 1)
    }
  }, [indexBackground, isAnimating])

  const getGroupSize = useCallback(() => {
    if (window.matchMedia('(max-width: 767.98px)').matches) {
      return 1
    } else if (window.matchMedia('(max-width: 991.98px)').matches) {
      return 2
    } else {
      return 3
    }
  }, [])

  const groupedModels = models.reduce((acc, curr, index) => {
    const groupIndex = Math.floor(index / groupSize)
    if (!acc[groupIndex]) {
      acc[groupIndex] = []
    }
    acc[groupIndex].push(curr)
    return acc
  }, [])

  const handleTransitionEnd = () => {
    setIsAnimating(false)
  }

  useEffect(() => {
    setIndexBackground(Math.ceil((backgroundImages.length - 1) / 2))
  }, [])

  useEffect(() => {
    const image = new Image()
    image.src = backgroundImages[indexBackground].src
    image.onload = () => {
      setBackgroundImageUrl(image.src)
      setIsAnimating(true)
      setBackgroundImageLoading(false)
    }
  }, [indexBackground])

  useEffect(() => {
    setGroupSize(getGroupSize())
  }, [getGroupSize])

  useEffect(() => {
    function handleResize() {
      setGroupSize(getGroupSize())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [getGroupSize])

  return (
    <section
      id="gallery-section"
      className={`gallery-section ${isAnimating ? 'animating' : ''}`}
      onTransitionEnd={handleTransitionEnd}
      style={
        !backgroundImageLoading
          ? { backgroundImage: `url(${backgroundImageUrl})` }
          : null
      }
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
                  {group.map(({ src }, itemIndex) => (
                    <img
                      key={`${groupIndex}-${itemIndex}`}
                      className="d-block mx-sm-auto mx-md-0 gallery-section__img"
                      src={src}
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
            {backgroundImages.map(({ src }, bgIndex) => (
              <button
                key={bgIndex}
                aria-label={src}
                aria-current={indexBackground !== bgIndex ? 'false' : 'true'}
                className={`button mx-2 ${
                  indexBackground !== bgIndex ? '' : 'active'
                }`}
                onClick={() => setIndexBackground(bgIndex)}
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
