import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({ user, setUser }) {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user == null) {
        setLoading(true)
    } else {
        setLoading(false)
    }
}, [user])

  function handleLogoutClick(e) {
    e.preventDefault()
    fetch('/api/logout', {
      method: 'DELETE'
    })
    .then(r => {
      if (r.ok) {
        setUser(null)
        window.location.href='/'
      }
    })
  }

  return (
    <Navbar id='navbar' expand='lg'>
      <Container fluid>
        <div id='headerAndImg'>
        <Navbar.Brand href="/" id='headerTitle'>my booknook</Navbar.Brand>
        <img src='https://i.imgur.com/J7udTqO.png' id='topPicksShelfImg'/>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            id='navbarLinks'
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
                <Nav.Link href="/leaderboard" id='headerLink'>Leaderboard</Nav.Link>
                <Nav.Link href="/my-books" id='headerLink'>My Books</Nav.Link>
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
          {loading ?
          null
          :
          user ?
          <Nav>
            <Nav.Link href="/search" id='linkButton'>Search</Nav.Link>
            <Nav.Link href="/profile" id='linkButton'>My Nook</Nav.Link>
            <Nav.Link id='linkButton' onClick={handleLogoutClick}>Log out</Nav.Link>
          </Nav>
          :
          <Nav>
            <Nav.Link href="/search" id='linkButton'>Search</Nav.Link>
            <Nav.Link href="/signup" id='linkButton'>Sign up</Nav.Link>
            <Nav.Link href="/login" id='linkButton'>Log in</Nav.Link>
          </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;