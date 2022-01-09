import React from 'react'
import { Container, Navbar,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/Home'>Home</Nav.Link>
        <Nav.Link as={Link} to='/Liste'>List</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Menu
