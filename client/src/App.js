import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'
import HomeContent from './HomeContent'
import Login from './Login'

function App() {

  const [allBooks, setAllBooks] = useState([])
  const [reviewsSortByNew, setreviewsSortByNew] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch('/books')
        .then(r => r.json())
        .then(data => setAllBooks(data))


    fetch('/newest-reviews')
    .then(r => r.json())
    .then(data => setreviewsSortByNew(data))

    fetch('/profile')
        .then(r => {
          if (r.ok) {
            r.json().then(data => setUser(data))
          }
        });
}, []);

  return (
    <div className="App">
        <NavBar user={user}/>
        <Router>
          <Routes>
            <Route exact path='/' element={<HomeContent allBooks={allBooks} setUser={setUser} reviewsSortByNew={reviewsSortByNew} user={user}/>} />
            <Route exact path='/login' element={<Login setUser={setUser}/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
