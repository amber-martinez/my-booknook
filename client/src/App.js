import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import HomeContent from './HomeContent'

function App() {

  const [allBooks, setAllBooks] = useState([])
  const [allReviews, setAllReviews] = useState([])

  useEffect(() => {
    fetch('/books')
        .then(r => r.json())
        .then(data => setAllBooks(data))

    fetch('/reviews')
        .then(r => r.json())
        .then(data => setAllReviews(data))
}, [])

  return (
    <div className="App">
      <NavBar />
      <HomeContent allBooks={allBooks}/>
    </div>
  );
}

export default App;
