import { useEffect, useState, useCallback } from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import getGalleryImgs from '../data/gallery-image'
import getBgImgArr from '../data/gallery-background-images'

const GallerySection = () => {
  const [index, setIndex] = useState(0)
  const [indexBackground, setIndexBackground] = useState(0)
  const [galleryImages, setGalleryImages] = useState(getGalleryImgs())
  const [bgImgArray, setBgImgArray] = useState(getBgImgArr())
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)
  const [groupSize, setGroupSize] = useState(1)
  const [groupedImages, setGroupedImages] = useState([])

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  const handlePrevBackground = () => {
    if (indexBackground > 0 && !isAnimating) {
      setIndexBackground(indexBackground - 1)
    }
  }

  const handleNextBackground = () => {
    if (indexBackground < bgImgArray.length - 1 && !isAnimating) {
      setIndexBackground(indexBackground + 1)
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
    setIndexBackground(Math.ceil((bgImgArray.length - 1) / 2))
  }, [bgImgArray])

  useEffect(() => {
    const image = new Image()
    image.src = bgImgArray[indexBackground].src

    image.onload = () => {
      setBackgroundImageUrl(image.src)
      setIsAnimating(true)
    }

    return () => {
      image.onload = null
    }
  }, [bgImgArray, indexBackground])

  useEffect(() => {
    setGroupSize(getGroupSize())
  }, [getGroupSize])

  useEffect(() => {
    function handleResize() {
      setGroupSize(getGroupSize())
      setBgImgArray(getBgImgArr())
      setGalleryImages(getGalleryImgs())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
      className={`gallery-section ${isAnimating ? 'animating' : ''}`}
      onTransitionEnd={handleTransitionEnd}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`
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
            className="gallery-section__carousel"
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
              indexBackground !== 0 ? '' : 'disabled'
            }`}
            onClick={handlePrevBackground}
            aria-label="Fond précédent"
          ></button>
          <div className="gallery-section__carousel-background-indicators">
            {bgImgArray.map(({ id, src }, bgIndex) => (
              <button
                key={id}
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
              indexBackground !== bgImgArray.length - 1 ? '' : 'disabled'
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
