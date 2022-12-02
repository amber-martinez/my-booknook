import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function Profile({ user, userBooks}) {

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
            <div>
            <div style={{ display: 'inline-block' }}>
                {userBooks
                ?
                <div>
                    <h4>My Books</h4>
                    <div>
                        {userBooks.map(book => (
                            <Card id='homepageBookListItem' class="card text-center" key={book.id}>
                                <Card.Img src={book.image_url} id='homepageBookImg'/>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Body id='bookCardBody'>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
                :
                null
                }
            </div>
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
                <div style={{ margin: '38px 0px 0px 0px' }}>
                    {quote ? <p style={{ fontSize: 14 }}>{quote.content} – {quote.author}</p> : null}
                </div>
                </Card>
            </div>
        {/* <div>
            {user.reviews.map(review => (
                <div>
                    <h4>hi</h4>
                    <p>{review.review_body}</p>
                </div>
            ))}
        </div> */}
        </div>
            :
            notLoggedIn}
        </div>
    )
}

export default Profile;