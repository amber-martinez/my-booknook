import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'
import HomeContent from './HomeContent'
import Login from './Login'
import Profile from './Profile'
import DisplayBooks from './DisplayBooks';

function App() {

  const [allBooks, setAllBooks] = useState([]);
  const [reviewsSortByNew, setreviewsSortByNew] = useState([]);
  const [user, setUser] = useState();
  const [userBooks, setUserBooks] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    fetch('/profile')
        .then(r => {
          if (r.ok) {
            r.json().then(data => {
              setUser(data)
              setUserBooks(data.books)
            })
          } else {
            setUser(false)
          }
        });

    fetch('/books')
    .then(r => r.json())
    .then(data => {
      setAllBooks(data)
      setGenre('All')
    })
  
    fetch('/newest-reviews')
    .then(r => r.json())
    .then(data => setreviewsSortByNew(data))

    fetch('/my-reviews')
    .then(r => r.json())
    .then(data => setUserReviews(data))

}, []);


  return (
    <div className="App">
        <NavBar user={user} setUser={setUser} setGenre={setGenre} genre={genre}/>
        <Router>
          <Routes>
            <Route exact path='/' element={<HomeContent allBooks={allBooks} setUser={setUser} reviewsSortByNew={reviewsSortByNew} user={user}/>} />
            <Route exact path='/login' element={<Login setUser={setUser}/>} />
            <Route exact path='/profile' element={<Profile user={user} userBooks={userBooks} userReviews={userReviews} setUser={setUser}/> } />
            <Route exact path='/books' element={<DisplayBooks allBooks={allBooks} setGenre={setGenre}/>}></Route>
            <Route exact path='/Classics' element={<DisplayBooks allBooks={allBooks} setGenre={setGenre}/>}></Route>
            <Route exact path='/Fantasy' element={<DisplayBooks allBooks={allBooks} setGenre={setGenre}/>}></Route>
            <Route exact path='/Fiction' element={<DisplayBooks allBooks={allBooks} setGenre={setGenre}/>}></Route>
            <Route exact path='/Poetry' element={<DisplayBooks allBooks={allBooks} setGenre={setGenre}/>}></Route>
            <Route exact path='/Romance' element={<DisplayBooks allBooks={allBooks} setGenre={setGenre}/>}></Route>
            <Route exact path='/Science-Fiction' element={<DisplayBooks allBooks={allBooks} setGenre={setGenre} genre={genre}/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
