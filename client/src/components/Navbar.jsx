import React, { useState } from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import Logo from '../assets/logo.svg'

const NavBar = () => {
  const [show, setShow] = useState(false)

  return (
    <Navbar expand="md" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#header">
          <img
            src={Logo}
            width="200" //TODO move to Style
            height="88.5"
            className="align-top d-none d-md-inline-block "
            alt="H.M. - barber shop logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand"
          onClick={setShow.bind(null, !show)}
        />

        <Navbar.Offcanvas
          id="offcanvasNavbar-expand"
          aria-labelledby="offcanvasNavbarLabel-expand"
          placement="end" // = rigth
          show={show}
          onHide={() => {
            setShow(!show)
          }}
          //TODO opacity transition for logo
          // onShow={test}
          // onExiting={test}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand">
              <Nav.Link href="#header" onClick={setShow.bind(null, !show)}>
                <img
                  src={Logo}
                  width="200" //TODO move to Style
                  height="88.5"
                  className="align-top" //? default Navbar example
                  alt="H.M. - barber shop logo"
                />
              </Nav.Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* <Nav className="justify-content-end flex-grow-1 pe-3"> */}
            <Nav className="">
              <Nav.Link href="#price-list" onClick={setShow.bind(null, !show)}>
                Nos tarifs
              </Nav.Link>
              <Nav.Link href="#gallery" onClick={setShow.bind(null, !show)}>
                Gallérie
              </Nav.Link>
              <Nav.Link href="#about" onClick={setShow.bind(null, !show)}>
                À propos
              </Nav.Link>
              <Nav.Link href="#footer" onClick={setShow.bind(null, !show)}>
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
