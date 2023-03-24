import React, { useState, useEffect, useCallback } from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import Logo from '../assets/logo.svg'

const NavBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false)
  const [navbarHidden, setNavbarHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const [sections, setSections] = useState([])

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setNavbarHidden(true)
      } else {
        // if scroll up show the navbar
        setNavbarHidden(false)
      }
      // remember current page location to use in the next move
      setLastScrollY(Math.abs(window.scrollY))
    }
  }, [lastScrollY])

  const navHighlighter = useCallback(() => {
    // Get current scroll position
    let scrollY = window.pageYOffset

    if (sections.length) {
      // Now we loop through sections to get height, top and ID values for each
      sections.forEach((current) => {
        // console.log('current', current)
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')

        /*
		- If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
		- To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
		*/

        if (document.querySelector('.navbar-nav a[href*=' + sectionId + ']')) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
              .querySelector('.navbar-nav a[href*=' + sectionId + ']')
              .classList.add('active')
          } else {
            document
              .querySelector('.navbar-nav a[href*=' + sectionId + ']')
              .classList.remove('active')
          }
        }
      })
    }
  }, [sections])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY, controlNavbar])

  // Get all sections that have an ID defined
  useEffect(() => {
    setSections(document.querySelectorAll('section[id]'))
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Add an event listener listening for scroll
      window.addEventListener('scroll', navHighlighter)

      // cleanup function
      return () => {
        window.removeEventListener('scroll', navHighlighter)
      }
    }
  }, [navHighlighter])

  return (
    <Navbar
      expand="md"
      variant="dark"
      sticky="top"
      className={`${navbarHidden ? 'scrolled-down' : 'scrolled-up'}`}
    >
      <Container>
        <Navbar.Brand href="#header">
          <img
            src={Logo}
            className="_logo align-top d-none d-md-inline-block"
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
          placement="end" // = rigth
          show={showOffcanvas}
          onHide={() => {
            setShowOffcanvas(!showOffcanvas)
          }}
          responsive="md"
          //TODO opacity transition for logo
          // onShow={test}
          // onExiting={test}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id="offcanvasNavbarLabel-expand"
              className="text-center"
            >
              <Nav.Link
                href="#header"
                onClick={setShowOffcanvas.bind(null, !showOffcanvas)}
              >
                <img
                  src={Logo}
                  className="_logo align-top" //? default Navbar example
                  alt="H.M. - barber shop logo"
                />
              </Nav.Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* <Nav className="justify-content-end flex-grow-1 pe-3"> */}
            <Nav>
              <Nav.Link
                href="#price-list"
                onClick={setShowOffcanvas.bind(null, !showOffcanvas)}
              >
                Nos tarifs
              </Nav.Link>
              <Nav.Link
                href="#gallery"
                onClick={setShowOffcanvas.bind(null, !showOffcanvas)}
              >
                Gallérie
              </Nav.Link>
              <Nav.Link
                href="#about"
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
