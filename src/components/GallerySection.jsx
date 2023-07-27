import { useRef, useEffect, useState, useCallback } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

const GallerySection = () => {
  const [index, setIndex] = useState(0)
  const [bgIndex, setBgIndex] = useState(0)
  const [groupSize, setGroupSize] = useState(1)
  const [groupedImages, setGroupedImages] = useState([])
  const [carouselOverlay, setCarouselOverlay] = useState(false)
  const delayTimerRef = useRef(null)

  const data = useStaticQuery(graphql`
    query CloudinaryImages {
      galleryImages: allCloudinaryMedia(
        filter: { folder: { eq: "mh-barbershop/gallery" } }
        sort: { fields: [created_at], order: ASC }
      ) {
        edges {
          node {
            id
            tags
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }

      galleryBackground: allCloudinaryMedia(
        filter: { folder: { eq: "mh-barbershop/gallery-background" } }
        sort: { fields: [created_at], order: ASC }
      ) {
        edges {
          node {
            id
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    }
  `)

  const galleryImages = data.galleryImages.edges.map(({ node }) => {
    const image = getImage(node)
    // console.log('image', image)
    return {
      id: node.id,
      alt: node.tags.join(' '),
      image
    }
  })

  const galleryBackground = data.galleryBackground.edges.map(({ node }) => {
    const image = getImage(node)
    return {
      id: node.id,
      alt: '',
      image
    }
  })

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  const handleBgSelect = (selectedIndex) => {
    setBgIndex(selectedIndex)
  }

  const hideCarousel = () => {
    setCarouselOverlay(true)
    clearTimeout(delayTimerRef.current)
    delayTimerRef.current = setTimeout(() => {
      setCarouselOverlay(false)
    }, 3000)
  }

  const handlePrevBackground = () => {
    if (selectedBackground > 0) {
      setSelectedBackground(selectedBackground - 1)
      hideCarousel()
    }
  }

  const handleNextBackground = () => {
    if (selectedBackground < backgroundImages.length - 1) {
      setSelectedBackground(selectedBackground + 1)
      hideCarousel()
    }
  }

  const handleChangeBackground = (selectedIndex) => {
    setSelectedBackground(selectedIndex)
    hideCarousel()
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
    // setSelectedBackground(Math.ceil((backgroundImages.length - 1) / 2))
    setBgIndex(Math.ceil((galleryBackground.length - 1) / 2))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    function handleResize() {
      setGroupSize(getGroupSize())
      // setGalleryImages(getGalleryImages())
      // setBackgroundImages(getBackgroundImages())
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
  }, [groupSize])

  return (
    <section
      id="gallery-section"
      className={`gallery-section ${carouselOverlay ? 'overlay' : ''}`}
    >
      <Carousel
        activeIndex={bgIndex}
        onSelect={handleBgSelect}
        defaultActiveIndex={bgIndex}
        interval={null}
        fade
        className="gallery-section__carousel-background"
      >
        {galleryBackground.map(({ id, image, alt }) => (
          <Carousel.Item key={id}>
            <GatsbyImage
              className="gallery-section__carousel-background__img"
              image={image}
              alt={alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Container className="py-5">
        <h2 className="heading-2 text-center">Gallérie</h2>
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
              <div className="d-flex justify-content-center gallery-section__carousel__slide-wrapper">
                {group.map(({ id, image, alt }) => (
                  <GatsbyImage
                    key={id}
                    className="d-block mx-sm-auto mx-md-0 gallery-section__carousel__img"
                    image={image}
                    alt={alt}
                  />
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  )
}

export default GallerySection
