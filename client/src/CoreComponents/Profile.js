import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyReviews from '../Profile/MyReviews';
import Books from '../Profile/Books';
import UserBox from '../Profile/UserBox';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Profile({ user, setUser }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user === null) {
            setLoading(true)
        } else {
            setLoading(false)
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    entry.target.classList.add('show')
                } else {
                    entry.target.classList.remove('show')
                }
            });
        })
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el))
    }, [user])

    const notLoggedIn = (
        <div style={{ textAlign: 'center', marginTop: 91 }}>
            <img src='https://i.gifer.com/origin/c9/c9be20ebec1e40b9e2ed8488253c44b0_w200.gif'></img>
            <h5 style={{ textAlign: 'center', marginTop: 15 }}>Oh no, you're not logged in!<br></br>Sign up or log in<Link to='/login' id='linkButton'>here.</Link></h5>
        </div>
    )

    return (
        <div class='hidden'>
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
                        <Books user={user}/>
                        <Row className="justify-content-md-center">
                            <Col xs lg="9" style={{ textAlign: 'center' }}>
                                <MyReviews user={user}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs lg="5" style={{ textAlign: 'center' }}>
                        <UserBox user={user} setUser={setUser}/>
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