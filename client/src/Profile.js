import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Profile({ user, userBooks, userReviews }) {

    const [quote, setQuote] = useState([])

    useEffect(() => {
        fetch('https://api.quotable.io/random')
        .then(r => r.json())
        .then(quote => setQuote(quote))
    }, [])

    const notLoggedIn = (
        <p>You're not logged in! Sign up or log in here.</p>
    )

    return (
        <div>
            {user
            ?
            <Container>
                <Row>
                    <Col xs lg="5">
                        <div style={{ display: 'inline-block' }}>
                            <div>
                                <div id='profileBooksContainer'>
                                    <h4 id='profileBooksHeader'>My Books</h4>
                                    {userBooks.map(book => (
                                        <div id='profileBook' class="card text-center" key={book.id}>
                                            <img src={book.image_url} id='profileBookImg'/>
                                            <h5 id='profileBooksTitle'>{book.title}</h5>
                                            <div id='bookCardBody'>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div id='profileCardContainer' class="float-end" style={{marginRight: 130, marginTop: 80, display: 'inline-block'}}>
                            <Card id='profileCard' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={user.profile_pic_url} style={{ borderRadius: 300, height: 200, width: 200, objectFit: 'cover', margin: 'auto' }}/>
                            <Card.Body style={{ marginTop: 17 }}>
                                <Card.Title>{user.username}</Card.Title>
                                <Card.Text>
                                {user.bio}
                                </Card.Text>
                            </Card.Body>
                            <div id='profileButtonGroup'>
                                <button id='profileButton'>Edit profile</button><br></br>
                                <button id='profileButton'>Create review</button><br></br>
                                <button id='profileButton'>Find a Book</button><br></br>
                                <button id='profileButton'>Log out</button>
                            </div>
                            <div style={{ margin: '30px 0px 0px 0px' }}>
                                {quote ? <p style={{ fontSize: 14 }}>{quote.content} – {quote.author}</p> : null}
                            </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            {userReviews.map(review => (
                                <div id='reviewsContainer'>
                                    <h4>{review.book.title}</h4>
                                    <p>{review.review_body}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
            :
            notLoggedIn}
        </div>
    )
}

export default Profile;