import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function Profile({ user, userTruthiness }) {

    const [quote, setQuote] = useState([])

    useEffect(() => {
        fetch('https://api.quotable.io/random')
        .then(r => r.json())
        .then(quote => setQuote(quote))
    }, [])

    const notLoggedIn = (
        <p>You're not logged in! Sign up or log in here.</p>
    )

    const loggedIn = (
        <div>
        <div id='profileCardContainer' style={{margin: '100px 0px 0px 1000px'}}>
            <Card id='profileCard' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user.profile_pic_url} style={{ borderRadius: 300, height: 200, width: 200, objectFit: 'cover', margin: 'auto' }}/>
            <Card.Body style={{ marginTop: 17 }}>
                <Card.Title>{user.username}</Card.Title>
                <Card.Text>
                {user.bio}
                </Card.Text>
            </Card.Body>
            <button>Edit profile</button>
            <button>My Books</button>
            <button>Create review</button>
            <button>Log out</button>
            <p>{quote.content} – {quote.author}</p>
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
    )

    return (
        <div>
            {userTruthiness ? loggedIn : notLoggedIn}
        </div>
    )
}

export default Profile;