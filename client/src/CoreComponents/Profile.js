import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Profile({ user, setUser, userBooks, userReviews }) {

    const [quote, setQuote] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (user == null) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [user])

    useEffect(() => {
        fetch('https://api.quotable.io/random')
        .then(r => r.json())
        .then(quote => setQuote(quote))
    }, [])

    function handleLogoutClick() {
        fetch('/api/logout', {
          method: 'DELETE'
        })
        .then(r => {
          if (r.ok) {
            window.location.href='/'
            setUser(null)
          }
        })
      }

    const notLoggedIn = (
        <div style={{ textAlign: 'center', marginTop: 91 }}>
            <img src='https://i.gifer.com/origin/c9/c9be20ebec1e40b9e2ed8488253c44b0_w200.gif'></img>
            <h5 style={{ textAlign: 'center', marginTop: 15 }}>Oh no, you're not logged in!<br></br>Sign up or log in<Link to='/login' id='linkButton'>here.</Link></h5>
        </div>
    )

    return (
        <div>
            {loading ?
            <div style={{ textAlign: 'center', marginTop: 245 }}>
	            <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 100 }}></img> 
            </div>
            :
            
            user
            ?
            <Container>
                <Row>
                    <Col>
                        <div style={{ textAlign: 'center' }}>
                            <div id='profileBooksContainer' style={{ display: 'inline-block', marginBottom: 30, overflow: 'scroll' }}>
                                <h4 id='profileBooksHeader'>My Books</h4>
                                    {userBooks.length ?
                                    user.books.map(book => {
                                        if (user.books.length === 1) {
                                            return (
                                            <div style={{ textAlign: 'center' }}>
                                                <div id='profileBook' class="card text-center" key={book.id} style={{ verticalAlign: 'top' }}>
                                                    <img src={book.image_url} id='profileBookImg'/>
                                                    <h5 id='profileBooksTitle'>{book.title}</h5>
                                                </div>
                                            </div>
                                            )
                                        } else {
                                        return (
                                        <div id='profileBook' class="card text-center" key={book.id} style={{ verticalAlign: 'top' }}>
                                            <img src={book.image_url} id='profileBookImg'/>
                                            <h5 id='profileBooksTitle'>{book.title}</h5>
                                        </div>
                                        )
                                        }
                                    }
                                    )
                                    :
                                    <div style={{ textAlign: 'center' }}>
                                        <h5>You don't have any books yet!</h5>
                                        <p><Link to='/new-review' id='inlineLinkButton'>Create a review</Link> to add books to your nook.</p>
                                    </div>
                                    }
                                    </div>
                                    </div>
                                    <div id='reviewsContainer'>
                                        <h4 id='profileReviewsHeader'>My Reviews</h4>
                                        
                                        {userReviews.length > 0 ?
                                        userReviews.map(review => {
                                                    if (review.rating == 1) {
                                                        return (
                                                            <div key={review.id}>
                                                                <h5 style={{ fontSize: 16 }}>{review.book.title} – {review.book.author}</h5>
                                                                <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star"></span>
                                                                <span className="fa fa-star"></span>
                                                                <span className="fa fa-star"></span>
                                                                <span className="fa fa-star"></span>
                                                                <p>by {review.user.username}</p>
                                                                <p>{review.review_body}</p>
                                                            </div>
                                                        )
                                                    } else if (review.rating == 2) {
                                                        return (
                                                            <div key={review.id}>
                                                                <h5>{review.book.title} – {review.book.author}</h5>
                                                                <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star"></span>
                                                                <span className="fa fa-star"></span>
                                                                <span className="fa fa-star"></span>
                                                                <p>by {review.user.username}</p>
                                                                <p>{review.review_body}</p>
                                                            </div>
                                                        )
                                                    } else if (review.rating == 3) {
                                                        return (
                                                            <div key={review.id}>
                                                                <h5>{review.book.title} – {review.book.author}</h5>
                                                                <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star"></span>
                                                                <span className="fa fa-star"></span>
                                                                <p>by {review.user.username}</p>
                                                                <p>{review.review_body}</p>
                                                            </div>
                                                        )
                                                    } else if (review.rating == 4) {
                                                        return (
                                                            <div key={review.id}>
                                                                <h5>{review.book.title} – {review.book.author}</h5>
                                                                <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star"></span>
                                                                <p>by {review.user.username}</p>
                                                                <p>{review.review_body}</p>
                                                            </div>
                                                        )
                                                    } else if (review.rating == 5) {
                                                        // debugger;
                                                        console.log('hello')
                                                        return (
                                                            <div key={review.id}>
                                                                <h5>{review.book.title} – {review.book.author}</h5>
                                                                <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star checked"></span>
                                                                <p>by {review.user.username}</p>
                                                                <p>{review.review_body}</p>
                                                            </div>
                                                        )
                                                    }
                                        })
                                        :
                                        <div style={{ textAlign: 'center' }}>
                                            <h5>You don't have any reviews yet!</h5>
                                            <p><Link to='/new-review' id='inlineLinkButton'>Create a review</Link> to add reviews and books to your nook.</p>
                                        </div>
                                        }
                                    </div>
                                </Col>
                                <Col>
                                    <div id='profileCardContainer' class="float-end" style={{marginRight: 130, marginTop: 80, display: 'inline-block' }}>
                                        <Card id='profileCard' style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={user.profile_pic_url} style={{ borderRadius: 300, height: 200, width: 200, objectFit: 'cover', margin: 'auto' }}/>
                                        <Card.Body style={{ marginTop: 17 }}>
                                            <Card.Title>{user.username}</Card.Title>
                                            <Card.Text>
                                            {user.bio}
                                            </Card.Text>
                                        </Card.Body>
                                        <div id='profileButtonGroup'>
                                            <button id='profileButton'><Link to='/edit-profile' id='profileButton'>Edit profile</Link></button><br></br>
                                            <button id='profileButton'><Link to='/new-review' id='profileButton'>Create review</Link></button><br></br>
                                            <button id='profileButton'><Link to='/add-book' id='profileButton'>Add a Book</Link></button><br></br>
                                            <button id='profileButton' onClick={handleLogoutClick}>Log out</button>
                                        </div>
                                        <div style={{ margin: '29px 0px 0px 0px' }}>
                                            {quote ? <p style={{ fontSize: 14 }}>{quote.content} – {quote.author}</p> : null}
                                        </div>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        :
                        notLoggedIn
        }
        </div>
    )
}

export default Profile;