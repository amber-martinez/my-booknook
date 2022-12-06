import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'
import HomeContent from './HomeContent'
import Login from './Login'
import Profile from './Profile'
import DisplayBooks from './DisplayBooks';
import SignUpForm from './SignUpForm';
import Search from './Search';
import MyBooks from './MyBooks';
import Leaderboard from './Leaderboard';
import DisplayReviews from './DisplayReviews';

function App() {

  const [allBooks, setAllBooks] = useState([]);
  const [reviewsSortByNew, setreviewsSortByNew] = useState([]);
  const [user, setUser] = useState();
  const [userBooks, setUserBooks] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const [genre, setGenre] = useState(null);
  const [reviewsByRating, setReviewsByRating] = useState([]);
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

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

    fetch('/top-rated-books')
    .then(r => r.json())
    .then(data => setReviewsByRating(data))

    fetch('/my-reviews')
    .then(r => r.json())
    .then(data => setUserReviews(data))


    setLoading(false)

}, []);


  return (
    <div className="App">
        <NavBar user={user} setUser={setUser} setGenre={setGenre} genre={genre} loading={loading}/>
        <Router>
          <Routes>
            <Route exact path='/' element={<HomeContent allBooks={allBooks} setUser={setUser} reviewsSortByNew={reviewsSortByNew} user={user}/>} />
            <Route exact path='/login' element={<Login setUser={setUser}/>} />
            <Route exact path='/signup' element={<SignUpForm setUser={setUser}/>} />
            <Route exact path='/search' element={<Search allBooks={allBooks}/>} />
            <Route exact path='/my-books' element={<MyBooks userBooks={userBooks} user={user}/>} />
            <Route exact path='/leaderboard' element={<Leaderboard reviewsByRating={reviewsByRating} loading={loading}/>} />
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
