import { useRef, useEffect, useState, useCallback } from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import getGalleryImages from '../data/gallery-images'
import getBackgroundImages from '../data/gallery-backgrounds'

const GallerySection = () => {
  const [galleryImages, setGalleryImages] = useState(getGalleryImages())
  const [index, setIndex] = useState(0)
  const [groupSize, setGroupSize] = useState(1)
  const [groupedImages, setGroupedImages] = useState([])
  const [backgroundImages, setBackgroundImages] = useState(
    getBackgroundImages()
  )
  const [selectedBackground, setSelectedBackground] = useState(0)
  const [selectedBackgroundUrl, setSelectedBackgroundUrl] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)
  const [carouselOverlay, setCarouselOverlay] = useState(false)
  const delayTimerRef = useRef(null)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  const hideCarousel = () => {
    setCarouselOverlay(true)
    clearTimeout(delayTimerRef.current)
    delayTimerRef.current = setTimeout(() => {
      setCarouselOverlay(false)
    }, 3000)
  }

  const handlePrevBackground = () => {
    if (selectedBackground > 0 && !isAnimating) {
      setSelectedBackground(selectedBackground - 1)
      hideCarousel()
    }
  }

  const handleNextBackground = () => {
    if (selectedBackground < backgroundImages.length - 1 && !isAnimating) {
      setSelectedBackground(selectedBackground + 1)
      hideCarousel()
    }
  }

  const handleChangeBackground = (selectedIndex) => {
    if (!isAnimating) {
      setSelectedBackground(selectedIndex)
      hideCarousel()
    }
  }

  const handleTransitionEnd = () => {
    setIsAnimating(false)
  }

  const getGroupSize = useCallback(() => {
    if (window.matchMedia('(max-width: 767.98px)').matches) {
      return 1
    } else if (window.matchMedia('(max-width: 991.98px)').matches) {
      return 2
    } else {
      return 3
    }
  }, [])

  useEffect(() => {
    setSelectedBackground(Math.ceil((backgroundImages.length - 1) / 2))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const image = new Image()
    image.src = backgroundImages[selectedBackground].src

    image.onload = () => {
      setSelectedBackgroundUrl(image.src)
      setIsAnimating(true)
    }

    return () => {
      image.onload = null
    }
  }, [backgroundImages, selectedBackground])

  useEffect(() => {
    function handleResize() {
      setGroupSize(getGroupSize())
      setGalleryImages(getGalleryImages())
      setBackgroundImages(getBackgroundImages())
    }

    setGroupSize(getGroupSize())

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [getGroupSize])

  useEffect(() => {
    const updatedGroupedImages = galleryImages.reduce((acc, curr, index) => {
      const groupIndex = Math.floor(index / groupSize)
      if (!acc[groupIndex]) {
        acc[groupIndex] = []
      }
      acc[groupIndex].push(curr)
      return acc
    }, [])

    setGroupedImages(updatedGroupedImages)
  }, [galleryImages, groupSize])

  return (
    <section
      id="gallery-section"
      className={`gallery-section py-5 ${isAnimating ? 'animating' : ''} ${
        carouselOverlay ? 'overlay' : ''
      }`}
      onTransitionEnd={handleTransitionEnd}
      style={{
        backgroundImage: `url(${selectedBackgroundUrl})`
      }}
    >
      <Container className="my-5">
        <h2 className="heading-2 text-center">Gallérie</h2>
        <div className="gallery-section__carousel-wrapper">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            defaultActiveIndex={0}
            interval={null}
            className={`gallery-section__carousel ${
              carouselOverlay ? 'overlay' : ''
            }`}
            onMouseEnter={() => setCarouselOverlay(false)}
            onTouchStart={() => setCarouselOverlay(false)}
          >
            {groupedImages.map((group, groupIndex) => (
              <Carousel.Item key={groupIndex}>
                <div className="d-flex justify-content-between gallery-section__slide-wrapper">
                  {group.map(({ id, src, alt }) => (
                    <img
                      key={id}
                      className="d-block mx-sm-auto mx-md-0 gallery-section__img"
                      src={src}
                      alt={alt}
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
              selectedBackground !== 0 ? '' : 'disabled'
            }`}
            onClick={handlePrevBackground}
            aria-label="Fond précédent"
          ></button>
          <div className="gallery-section__carousel-background-indicators">
            {backgroundImages.map(({ id, src }, bgIndex) => (
              <button
                key={id}
                aria-label={src}
                aria-current={selectedBackground !== bgIndex ? 'false' : 'true'}
                className={`button mx-2 ${
                  selectedBackground !== bgIndex ? '' : 'active'
                }`}
                onClick={handleChangeBackground.bind(null, bgIndex)}
              ></button>
            ))}
          </div>
          <button
            className={`gallery-section__background-next-button ${
              selectedBackground !== backgroundImages.length - 1
                ? ''
                : 'disabled'
            }`}
            onClick={handleNextBackground}
            aria-label="Fond suivant"
          ></button>
        </div>
      </Container>
    </section>
  )
}

export default GallerySection
