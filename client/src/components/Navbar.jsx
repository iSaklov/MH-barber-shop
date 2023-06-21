import { useState, useEffect, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import Logo from '../assets/logo.svg'

const NavBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false)
  const [navbarHidden, setNavbarHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeLink, setActiveLink] = useState(null)
  const sectionsRef = useRef([])
  const navigate = useNavigate()

  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setNavbarHidden(true)
    } else {
      setNavbarHidden(false)
    }
    setLastScrollY(Math.abs(window.scrollY))
  }, [lastScrollY])

  const navHighlighter = useCallback(() => {
    const scrollY = window.pageYOffset
    // It returns the first section that satisfies the condition using the find() method in combination with reverse() to start the search from the end of the list of sections. This ensures that the topmost (closest to the top of the page) section that is visible on the screen will be found
    const activeSection = [...sectionsRef.current].reverse().find((section) => {
      const sectionHeight = section.offsetHeight
      const sectionTop = section.offsetTop - window.innerHeight * 0.75
      return scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
    })

    if (activeSection) {
      setActiveLink(activeSection.getAttribute('id'))
    } else {
      setActiveLink(null)
    }
  }, [])

  const handleScroll = useCallback(() => {
    controlNavbar()
    navHighlighter()
  }, [controlNavbar, navHighlighter])

  const handleLinkClick = (event) => {
    function scrollToTop(sectionId) {
      const section = document.getElementById(sectionId)

      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      })
      navigate(`#${sectionId}`)
      // window.location.hash = sectionId
    }

    if (event) {
      event.preventDefault()

      const currentElement = event.target
      const parentElement = currentElement.parentElement

      if (currentElement.hasAttribute('href')) {
        const sectionId = currentElement.hash.substring(1)
        scrollToTop(sectionId)
      } else if (parentElement && parentElement.hasAttribute('href')) {
        // referring to the parent element allows navigation when clicking on the logo in the mobile menu
        const sectionId = parentElement.hash.substring(1)
        scrollToTop(sectionId)
      }
    }

    if (window.matchMedia('(max-width: 767.98px)').matches) {
      // avoids showOffcanvas state change on non-mobile devices
      setShowOffcanvas(!showOffcanvas)
    }
  }

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll('section[id], footer[id]')
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <Navbar
      expand="md"
      variant="dark"
      fixed="top"
      className={`${navbarHidden ? 'scrolled-down' : 'scrolled-up'}`}
    >
      <Container>
        <Navbar.Brand>
          <Nav.Link
            href="#hero-section"
            onClick={handleLinkClick}
            aria-label="Accueil"
          >
            <img
              src={Logo}
              alt="H.M. - barber shop logo"
              className="d-none d-md-inline-block navbar-brand__logo"
            />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand"
          onClick={handleLinkClick}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand"
          aria-labelledby="offcanvasNavbarLabel-expand"
          placement="end" // rigth
          show={showOffcanvas}
          onHide={handleLinkClick.bind(null)}
          scroll={false}
          backdrop={true}
          responsive="md"
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id="offcanvasNavbarLabel-expand">
              <Nav.Link
                href="#hero-section"
                onClick={handleLinkClick}
                aria-label="Accueil"
              >
                <img
                  src={Logo}
                  alt="H.M. - barber shop logo"
                  className="offcanvas-header__logo"
                />
              </Nav.Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav activeKey={null}>
              <Nav.Link
                href="#price-list-section"
                onClick={handleLinkClick}
                className={activeLink === 'price-list-section' ? 'active' : ''}
                aria-label="Nos tarifs"
              >
                Nos tarifs
              </Nav.Link>
              <Nav.Link
                href="#gallery-section"
                onClick={handleLinkClick}
                className={activeLink === 'gallery-section' ? 'active' : ''}
                aria-label="Galerie"
              >
                Gallérie
              </Nav.Link>
              <Nav.Link
                href="#about-us-section"
                onClick={handleLinkClick}
                className={activeLink === 'about-us-section' ? 'active' : ''}
                aria-label="À propos de nous"
              >
                À propos
              </Nav.Link>
              <Nav.Link
                href="#footer"
                onClick={handleLinkClick}
                className={activeLink === 'footer' ? 'active' : ''}
                aria-label="Contacts"
              >
                Contacts
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavBar
