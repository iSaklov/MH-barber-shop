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

  const handleLinkClick = (event, sectionId = null) => {
    if (event) {
      // without canceling the standard behavior, navigation to the desired section from Offcanvas did not occur
      event.preventDefault()
    }

    if (sectionId) {
      const section = document.getElementById(sectionId)
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      })
      navigate(`#${sectionId}`)
    }

    if (window.matchMedia('(max-width: 767.98px)').matches) {
      // avoids showOffcanvas state change on non-mobile devices
      setShowOffcanvas(!showOffcanvas)
    }
  }

  // useEffect(() => {
  //   console.log('showOffcanvas', showOffcanvas)
  // }, [showOffcanvas])

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
        <Navbar.Brand href="#hero-section">
          <img
            src={Logo}
            className="d-none d-md-inline-block navbar-brand__logo"
            alt="H.M. - barber shop logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand"
          onClick={(event) => handleLinkClick(event, null)}
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
                onClick={(event) => handleLinkClick(event, 'hero-section')}
              >
                <img src={Logo} alt="H.M. - barber shop logo" />
              </Nav.Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav activeKey={null}>
              <Nav.Link
                href="#price-list-section"
                onClick={(event) =>
                  handleLinkClick(event, 'price-list-section')
                }
                className={activeLink === 'price-list-section' ? 'active' : ''}
              >
                Nos tarifs
              </Nav.Link>
              <Nav.Link
                href="#gallery-section"
                onClick={(event) => handleLinkClick(event, 'gallery-section')}
                className={activeLink === 'gallery-section' ? 'active' : ''}
              >
                Gallérie
              </Nav.Link>
              <Nav.Link
                href="#about-us-section"
                onClick={(event) => handleLinkClick(event, 'about-us-section')}
                className={activeLink === 'about-us-section' ? 'active' : ''}
              >
                À propos
              </Nav.Link>
              <Nav.Link
                href="#footer"
                onClick={(event) => handleLinkClick(event, 'footer')}
                className={activeLink === 'footer' ? 'active' : ''}
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
