import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({ user, setUser }) {

  const [searchField, setSearchField] = useState('')

  function handleSearchField(e) {
    setSearchField(e.target.value)
  }

  function handleLogoutClick() {
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(r => {
      if (r.ok) {
        setUser(null)
      }
    })
  }

  return (
    <Navbar id='navbar'>
      <Container fluid>
        <Navbar.Brand href="/" id='headerTitle'>my booknook</Navbar.Brand>
        <img src='https://i.imgur.com/J7udTqO.png' id='topPicksShelfImg'/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            id='navbarLinks'
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
                <Nav.Link href="#action1" id='headerLink'>Leaderboard</Nav.Link>
                <Nav.Link href="#action2" id='headerLink'>My Books</Nav.Link>
                <NavDropdown title="Genres" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/books" id='headerLink' name='All'>All Books</NavDropdown.Item>
                <NavDropdown.Divider></NavDropdown.Divider>
                <NavDropdown.Item href="/Classics" id='headerLink' name='Classics'>Classics</NavDropdown.Item>
                <NavDropdown.Item href="/Fantasy" id='headerLink' name='Fantasy'>Fantasy</NavDropdown.Item>
                <NavDropdown.Item href="/Fiction" id='headerLink' name='Fiction'>Fiction</NavDropdown.Item>
                <NavDropdown.Item href="/Poetry" id='headerLink' name='Poetry'>Poetry</NavDropdown.Item>
                <NavDropdown.Item href="/Romance" id='headerLink' name='Romance'>Romance</NavDropdown.Item>
                <NavDropdown.Item href="/Science-Fiction" id='headerLink' name='Science-Fiction'>Science-Fiction</NavDropdown.Item>
                </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="Search"
              placeholder="Search for books"
              className="me-2"
              aria-label="Search"
              id='searchField'
              onChange={handleSearchField}
            />
            <Button variant="outline-success" id='searchButton'>Search</Button>
          </Form>
          {user
          ?
          <Nav>
            <Nav.Link href="/profile" id='linkButton'>My Nook</Nav.Link>
            <Button id='navbarLoginButton' onClick={handleLogoutClick}>Log out</Button>
          </Nav>
          :
          <Nav>
          <Nav.Link href="/signup" id='linkButton'>Sign up</Nav.Link>
          <Nav.Link href="/login" id='navbarLoginButton'>Log in</Nav.Link>
          </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;