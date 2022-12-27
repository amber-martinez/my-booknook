import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyBooks from '../Profile/MyBooks'
import MyReviews from '../Profile/MyReviews';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Profile({ user, setUser, userBooks, userReviews }) {

    const [quote, setQuote] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

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
            <div>
                <Row className="justify-content-md-center" id='profileRow'>
                    <Col xs lg="5" style={{ textAlign: 'center' }}>
                        <MyBooks user={user} userBooks={userBooks}/>
                        <Row className="justify-content-md-center">
                            <Col xs lg="5" style={{ textAlign: 'center' }}>
                                <MyReviews userReviews={userReviews}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs lg="5" style={{ textAlign: 'center' }}>
                    <div style={{ backgroundColor: '#f7f4f1', marginTop: 80, padding: 30, borderRadius: 10, textAlign: 'center', display: 'inline-block' }}>
                            <Card id='profileCard' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={user.profile_pic_url} style={{ borderRadius: 300, height: 200, width: 200, objectFit: 'cover', margin: 'auto', border: 'solid 1px white' }}/>
                            <Card.Body style={{ marginTop: 17 }}>
                                <Card.Title style={{ fontSize: 18 }}>{user.username}</Card.Title>
                                <Card.Text style={{ fontSize: 14, marginTop: -3 }}>
                                {user.bio}
                                </Card.Text>
                            </Card.Body>
                            {showSettings ?
                            <div>
                            <button onClick={(() => setShowSettings(!showSettings))} style={{ fontSize: 14, marginTop: 9, backgroundColor: 'transparent', border: 'none' }}><img src='https://i.imgur.com/NVIZzfu.png' alt='settings' style={{ height: 25 }}></img></button><br></br>
                            <div id='profileButtonGroup' style={{ fontSize: 13, marginTop: 10 }}>
                                <button style={{ width: 100, padding:'3px 0px 3px 0px', textAlign: 'center', margin: 5, border: 'transparent', backgroundColor: '#e9e5dcdf', borderRadius: 4 }}><Link to='/edit-profile' style={{ width: 100, color: '#362c24' }}>Edit profile</Link></button><br></br>
                                <button style={{ width: 100, padding:'3px 0px 3px 0px', textAlign: 'center', margin: 5, border: 'transparent', backgroundColor: '#e9e5dcdf', borderRadius: 5, color: '#362c24' }}><Link to='/new-review' style={{ color: '#362c24' }}>Create review</Link></button><br></br>
                                <button style={{ width: 100, padding:'3px 0px 3px 0px', textAlign: 'center', margin: 5, border: 'transparent', backgroundColor: '#e9e5dcdf', borderRadius: 5, color: '#362c24' }}><Link to='/add-book' style={{ color: '#362c24' }}>Add a Book</Link></button><br></br>
                                <button style={{ width: 100, padding:'3px 0px 3px 0px', textAlign: 'center', margin: 5, border: 'transparent', backgroundColor: '#e9e5dcdf', borderRadius: 5, color: '#362c24' }} onClick={handleLogoutClick}>Log out</button>
                            </div>
                            </div>
                            : 
                            <div>
                                <button onClick={(() => setShowSettings(!showSettings))} style={{ fontSize: 14, marginTop: 9, backgroundColor: 'transparent', border: 'none' }}><img src='https://i.imgur.com/NVIZzfu.png' alt='settings' style={{ height: 25 }}></img></button>
                            </div>
                            }
                            <div style={{ margin: '29px 0px 0px 0px' }}>
                                {quote ? <p style={{ fontSize: 14 }}>{quote.content} – {quote.author}</p> : null}
                            </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
            :
            null
            }
        </div>
    )
}

export default Profile;