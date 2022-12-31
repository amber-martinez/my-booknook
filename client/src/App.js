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
import Leaderboard from './CoreComponents/Leaderboard';
import EditProfile from './Profile/EditProfile'
import CreateReview from './Reviews/CreateReview';
import AddBook from './Edit/AddBook';
import ShowBooks from './CoreComponents/ShowBooks';
// import BookPage from './CoreComponents/BookPage';

function App() {

  const [allBooks, setAllBooks] = useState([]);
  const [reviewsSortByNew, setreviewsSortByNew] = useState([]);
  const [user, setUser] = useState();
  const [newestBooks, setNewestBooks] = useState([]);

  useEffect(() => {

    fetch('/api/user-profile')
        .then(r => {
          if (r.ok) {
            r.json().then(data => {
              setUser(data)
            })
          } else {
            setUser(false)
          }
        });

    fetch('/api/books')
    .then(r => r.json())
    .then(data => {
      setAllBooks(data)
    })

    fetch('/api/newest-books')
    .then(r => r.json())
    .then(data => setNewestBooks(data))
  
    fetch('/api/newest-reviews')
    .then(r => r.json())
    .then(data => setreviewsSortByNew(data))

}, []);

  return (
    <div className="App">
        <NavBar user={user} setUser={setUser}/>
        <Router>
          <Routes>
            <Route exact path='/' element={<HomeContent allBooks={allBooks} setUser={setUser} reviewsSortByNew={reviewsSortByNew} user={user} newestBooks={newestBooks}/>} />
            <Route exact path='/login' element={<Login setUser={setUser}/>} />
            <Route exact path='/signup' element={<SignUpForm setUser={setUser}/>} />
            <Route exact path='/search' element={<Search allBooks={allBooks}/>} />
            <Route exact path='/leaderboard' element={<Leaderboard user={user}/>} />
            <Route exact path='/profile' element={<Profile user={user} setUser={setUser}/> } />
            <Route exact path='/new-review' element={<CreateReview allBooks={allBooks} user={user}/>}/>
            <Route exact path='/edit-profile' element={<EditProfile user={user} setUser={setUser}/>}/>
            <Route exact path='/add-book' element={<AddBook/>}/>
            <Route path='/all_books/:genre' element={<ShowBooks/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
