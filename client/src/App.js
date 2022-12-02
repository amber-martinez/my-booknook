import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'
import HomeContent from './HomeContent'
import Login from './Login'
import Profile from './Profile'

function App() {

  const [allBooks, setAllBooks] = useState([])
  const [reviewsSortByNew, setreviewsSortByNew] = useState([])
  const [user, setUser] = useState({})
  const [userTruthiness, setUserTruthiness] = useState(false)

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
            r.json().then(data => {
              setUser(data)
              setUserTruthiness(true)
            })
          }
        });
}, []);

  return (
    <div className="App">
        <NavBar user={user} setUser={setUser} userTruthiness={userTruthiness}/>
        <Router>
          <Routes>
            <Route exact path='/' element={<HomeContent allBooks={allBooks} setUser={setUser} reviewsSortByNew={reviewsSortByNew} user={user} userTruthiness={userTruthiness}/>} />
            <Route exact path='/login' element={<Login setUser={setUser}/>} />
            <Route exact path='/profile' element={<Profile user={user} userTruthiness={userTruthiness} />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
