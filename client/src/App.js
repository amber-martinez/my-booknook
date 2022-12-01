import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import HomeContent from './HomeContent'

function App() {

  const [allBooks, setAllBooks] = useState([])
  const [allReviews, setAllReviews] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch('/books')
        .then(r => r.json())
        .then(data => setAllBooks(data))

    fetch('/reviews')
        .then(r => r.json())
        .then(data => setAllReviews(data))

    fetch('/profile')
        .then(r => {
          if (r.ok) {
            r.json().then(data => setUser(data))
          }
        });
}, []);

  return (
    <div className="App">
      <NavBar />
      <HomeContent allBooks={allBooks} setUser={setUser}/>
    </div>
  );
}

export default App;
