import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {

  const [searchField, setSearchField] = useState('')

  function handleSearchField(e) {
    setSearchField(e.target.value)
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
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#action3" id='headerLink'>Classics</NavDropdown.Item>
                <NavDropdown.Item href="#action4" id='headerLink'>Fantasy</NavDropdown.Item>
                <NavDropdown.Item href="#action5" id='headerLink'>Fiction</NavDropdown.Item>
                <NavDropdown.Item href="#action6" id='headerLink'>Poetry</NavDropdown.Item>
                <NavDropdown.Item href="#action7" id='headerLink'>Romance</NavDropdown.Item>
                <NavDropdown.Item href="#action7" id='headerLink'>Science-Fiction</NavDropdown.Item>
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
            <Button variant="outline-success" id='searchButton'>search</Button>
          </Form>
          <Nav.Link href="/login" id='navbarLoginButton'>Log In</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

// function NavBar() {

//     return (
//         <div className='navbar'>
//             <p id='headerTitle'>my booknook</p>
//         </div>
//     )

// }