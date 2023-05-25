import { useState, useEffect, useCallback, useRef } from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import Logo from '../assets/logo.svg'

const NavBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false)
  const [navbarHidden, setNavbarHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const sectionsRef = useRef([])

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
    sectionsRef.current.forEach((section) => {
      const sectionHeight = section.offsetHeight
      const sectionTop = section.offsetTop - window.innerHeight * 0.75;
      const sectionId = section.getAttribute('id')
      const link = document.querySelector(`.navbar-nav a[href*="${sectionId}"]`)
      if (link) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      }
    })
  }, [])

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll('section[id], footer[id]')
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [controlNavbar])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    window.addEventListener('scroll', navHighlighter)
    return () => {
      window.removeEventListener('scroll', navHighlighter)
    }
  }, [navHighlighter])

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
          onClick={setShowOffcanvas.bind(null, !showOffcanvas)}
        />

        <Navbar.Offcanvas
          id="offcanvasNavbar-expand"
          aria-labelledby="offcanvasNavbarLabel-expand"
          placement="end" // rigth
          show={showOffcanvas}
          onHide={() => {
            setShowOffcanvas(!showOffcanvas)
          }}
          responsive="md"
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id="offcanvasNavbarLabel-expand">
              <Nav.Link
                href="#hero-section"
                onClick={setShowOffcanvas.bind(null, !showOffcanvas)}
              >
                <img src={Logo} alt="H.M. - barber shop logo" />
              </Nav.Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav>
              <Nav.Link
                href="#price-list-section"
                onClick={setShowOffcanvas.bind(null, !showOffcanvas)}
              >
                Nos tarifs
              </Nav.Link>
              <Nav.Link
                href="#gallery-section"
                onClick={setShowOffcanvas.bind(null, !showOffcanvas)}
              >
                Gallérie
              </Nav.Link>
              <Nav.Link
                href="#about-us-section"
                onClick={setShowOffcanvas.bind(null, !showOffcanvas)}
              >
                À propos
              </Nav.Link>
              <Nav.Link
                href="#footer"
                onClick={setShowOffcanvas.bind(null, !showOffcanvas)}
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
