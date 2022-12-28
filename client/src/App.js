import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './CoreComponents/NavBar'
import HomeContent from './CoreComponents/HomeContent'
import Login from './CoreComponents/Login'
import Profile from './CoreComponents/Profile'
import DisplayBooks from './CoreComponents/DisplayBooks';
import SignUpForm from './Homepage/SignUpForm';
import Search from './Search';
import MyBooks from './CoreComponents/MyBooks';
import Leaderboard from './CoreComponents/Leaderboard';
import EditProfile from './Profile/EditProfile'
import CreateReview from './Reviews/CreateReview';
import AddBook from './Edit/AddBook';

function App() {

  const [allBooks, setAllBooks] = useState([]);
  const [reviewsSortByNew, setreviewsSortByNew] = useState([]);
  const [user, setUser] = useState();
  const [userBooks, setUserBooks] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const [genre, setGenre] = useState(null);
  const [newestBooks, setNewestBooks] = useState([]);

  useEffect(() => {

    fetch('/api/user-profile')
        .then(r => {
          if (r.ok) {
            r.json().then(data => {
              setUser(data)
              setUserBooks(data.books)
              setUserReviews(data.reviews)
            })
          } else {
            setUser(false)
          }
        });

    fetch('/api/books')
    .then(r => r.json())
    .then(data => {
      setAllBooks(data)
      setGenre('All')
    })

    fetch('/api/newest-books')
    .then(r => r.json())
    .then(data => setNewestBooks(data))
  
    fetch('/api/newest-reviews')
    .then(r => r.json())
    .then(data => setreviewsSortByNew(data))

    // fetch('/api/my-reviews')
    // .then(r => r.json())
    // .then(data => setUserReviews(data))

}, []);

  return (
    <div className="App">
        <NavBar user={user} setUser={setUser} setGenre={setGenre} genre={genre}/>
        <Router>
          <Routes>
            <Route exact path='/' element={<HomeContent allBooks={allBooks} setUser={setUser} reviewsSortByNew={reviewsSortByNew} user={user} newestBooks={newestBooks}/>} />
            <Route exact path='/login' element={<Login setUser={setUser}/>} />
            <Route exact path='/signup' element={<SignUpForm setUser={setUser}/>} />
            <Route exact path='/search' element={<Search allBooks={allBooks}/>} />
            <Route exact path='/my-books' element={<MyBooks userBooks={userBooks} user={user}/>} />
            <Route exact path='/leaderboard' element={<Leaderboard user={user}/>} />
            <Route exact path='/profile' element={<Profile user={user} userBooks={userBooks} userReviews={userReviews} setUser={setUser}/> } />
            <Route exact path='/new-review' element={<CreateReview allBooks={allBooks} user={user}/>}/>
            <Route exact path='/edit-profile' element={<EditProfile user={user} setUser={setUser}/>}/>
            <Route exact path='/add-book' element={<AddBook />} />
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
