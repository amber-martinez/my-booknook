import React, { useEffect, useState } from 'react';
import NewestBooks from '../Homepage/NewestBooks'
import GenreBubbles from '../Homepage/GenreBubbles'
import RecentReviews from '../Homepage/RecentReviews';
import LoggedInWelcome from '../Homepage/LoggedInWelcome'
import SignUpForm from '../SignUpForm'
import Container from 'react-bootstrap/Container';
import Genres from '../Homepage/Genres';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomeContent({ allBooks, setUser, reviewsSortByNew, user, newestBooks }) {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (user == null) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [user])

    return (
        <div>
            {loading ?
            <div style={{ textAlign: 'center', marginTop: 245 }}>
                <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 100 }}></img> 
            </div>
            :
            <div style={{ margin: '50px 100px 50px 100px' }}>
                <Row className="justify-content-md-center" style={{ textAlign: 'center' }}>
                    <Col xs lg='5' style={{ width: 800 }}>
                        <NewestBooks allBooks={allBooks} newestBooks={newestBooks}/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{ marginTop: 65, textAlign: 'center' }}>
                    <Col xs lg='3' style={{ width: 600 }}>
                        <Genres/>
                    </Col>
                </Row>
            </div>
            // <Container id='homeContentContainer'>
            //     <Row>
            //         <Col md='5' lg="5" id='leftColHome'><NewestBooks allBooks={allBooks} newestBooks={newestBooks}/></Col>
            //         <Col>{user ? <LoggedInWelcome user={user}/> : <SignUpForm setUser={setUser}/>}</Col>
            //     </Row>
            //     <Row>
            //         <Col id='rightColHome'><RecentReviews reviewsSortByNew={reviewsSortByNew} user={user}/></Col>
            //         <Col><GenreBubbles allBooks={allBooks}/></Col>
            //     </Row>
            // </Container>
            }
        </div>
    )
}

export default HomeContent;