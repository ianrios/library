import React from 'react'
import { Navbar, Container, Nav, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link activeClassName={'active'} as={Link} to="/">Home</Nav.Link>
            <Nav.Link activeClassName={'active'} as={Link} to="/fees">Fees</Nav.Link>
            <Nav.Link activeClassName={'active'} as={Link} to="/catalogue">Catalogue</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
