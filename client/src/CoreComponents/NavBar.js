import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({ user, setUser }) {

  const [loading, setLoading] = useState(true);

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
    <Navbar id='navbar' expand='lg' style={{ marginBottom: 70 }}>
      <Container fluid>
        <div id='headerAndImg'>
        <img src='https://cdn-icons-png.flaticon.com/128/3771/3771417.png' id='topPicksShelfImg'/>
        <Navbar.Brand href="/" id='headerTitle'>My Booknook</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            id='navbarLinks'
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
                <Nav.Link href="/leaderboard" id='headerLink'>Leaderboard</Nav.Link>
                <NavDropdown title="Genres" id="headerLink" style={{ display: 'flex !important' }}>
                  <NavDropdown.Item href="/all_books/books" id='headerLink' name='All'>All Books</NavDropdown.Item>
                  <NavDropdown.Divider></NavDropdown.Divider>
                  <NavDropdown.Item href="/all_books/Art" id='headerLink' name='Art'>Art</NavDropdown.Item>
                  <NavDropdown.Item href="/all_books/Business" id='headerLink' name='Business'>Business</NavDropdown.Item>
                  <NavDropdown.Item href="/all_books/Classics" id='headerLink' name='Classics'>Classics</NavDropdown.Item>
                  <NavDropdown.Item href="/all_books/Fantasy" id='headerLink' name='Fantasy'>Fantasy</NavDropdown.Item>
                  <NavDropdown.Item href="/all_books/Fiction" id='headerLink' name='Fiction'>Fiction</NavDropdown.Item>
                  <NavDropdown.Item href="/all_books/Horror" id='headerLink' name='Horror'>Horror</NavDropdown.Item>
                  <NavDropdown.Item href="/all_books/Manga" id='headerLink' name='Manga'>Manga</NavDropdown.Item>
                  <NavDropdown.Item href="/all_books/Mystery" id='headerLink' name='Mystery'>Mystery</NavDropdown.Item>
                  <NavDropdown.Item href="/all_books/Poetry" id='headerLink' name='Poetry'>Poetry</NavDropdown.Item>
                  <NavDropdown.Item href="/all_books/Romance" id='headerLink' name='Romance'>Romance</NavDropdown.Item>
                  <NavDropdown.Item href="/all_books/Science-Fiction" id='headerLink' name='Science-Fiction'>Science-Fiction</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="https://github.com/amber-martinez/my-booknook" id='headerLink'>Github</Nav.Link>
          </Nav>
          {loading ?
          null
          :
          user ?
          <Nav>
            <Nav.Link href="/search" id='headerLink'>Search</Nav.Link>
            <Nav.Link href="/profile" id='headerLink'>My Nook</Nav.Link>
            <Nav.Link id='headerLink' href='/' onClick={handleLogoutClick}>Log out</Nav.Link>
          </Nav>
          :
          <Nav>
            <Nav.Link href="/search" id='headerLink'>Search</Nav.Link>
            <Nav.Link href="/signup" id='headerLink'>Sign up</Nav.Link>
            <Nav.Link href="/login" id='headerLink'>Log in</Nav.Link>
          </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;