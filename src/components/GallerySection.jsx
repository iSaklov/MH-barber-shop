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
    query {
      galleryImages: allCloudinaryMedia(
        filter: { folder: { eq: "mh-barbershop/gallery" } }
        sort: { created_at: ASC }
      ) {
        nodes {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          id
          tags
        }
      }

      galleryBackground: allCloudinaryMedia(
        filter: { folder: { eq: "mh-barbershop/gallery-background" } }
        sort: { created_at: ASC }
      ) {
        nodes {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          id
        }
      }
    }
  `)

  const galleryImages = data.galleryImages.nodes.map((node) => {
    const image = getImage(node)

    return {
      id: node.id,
      alt: node.tags.join(' '),
      image
    }
  })

  const galleryBackground = data.galleryBackground.nodes.map((node) => {
    const image = getImage(node)

    return {
      id: node.id,
      alt: '',
      image
    }
  })

  const hideCarousel = () => {
    setCarouselOverlay(true)
    clearTimeout(delayTimerRef.current)
    delayTimerRef.current = setTimeout(() => {
      setCarouselOverlay(false)
    }, 3000)
  }

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  const handleBgSelect = (selectedIndex) => {
    hideCarousel()
    setBgIndex(selectedIndex)
  }

  const getGroupSize = useCallback(() => {
    if (window.matchMedia('(max-width: 767.98px)').matches) {
      return 1
    }
    if (window.matchMedia('(max-width: 991.98px)').matches) {
      return 2
    }
    return 3
  }, [])

  useEffect(() => {
    setBgIndex(Math.ceil((galleryBackground.length - 1) / 2))
  }, [])

  useEffect(() => {
    function handleResize() {
      setGroupSize(getGroupSize())
    }

    setGroupSize(getGroupSize())

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [getGroupSize])

  useEffect(() => {
    const imagesSet = galleryImages.reduce((acc, curr, currentIndex) => {
      const groupIndex = Math.floor(currentIndex / groupSize)
      if (!acc[groupIndex]) {
        acc[groupIndex] = []
      }
      acc[groupIndex].push(curr)
      return acc
    }, [])

    setGroupedImages(imagesSet)
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
        <h2 className="heading-2 text-center">Galerie</h2>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          defaultActiveIndex={0}
          interval={null}
          className="gallery-section__carousel"
          onMouseEnter={() => setCarouselOverlay(false)}
          onTouchStart={() => setCarouselOverlay(false)}
        >
          {groupedImages.map((group) => (
            <Carousel.Item key={group[0].id}>
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
