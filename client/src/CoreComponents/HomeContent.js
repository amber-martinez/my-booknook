import React, { useEffect, useState } from 'react';
import NewestBooks from '../Homepage/NewestBooks'
import GenreBubbles from '../Homepage/GenreBubbles'
import RecentReviews from '../Homepage/RecentReviews';
import LoggedInWelcome from '../Homepage/LoggedInWelcome'
import SignUpForm from '../SignUpForm'
import Container from 'react-bootstrap/Container';
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
            <Container id='homeContentContainer'>
                <Row>
                    <Col md='5' lg="5" id='leftColHome'><NewestBooks allBooks={allBooks} newestBooks={newestBooks}/></Col>
                    <Col>{user ? <LoggedInWelcome user={user}/> : <SignUpForm setUser={setUser}/>}</Col>
                </Row>
                <Row>
                    <Col id='rightColHome'><RecentReviews reviewsSortByNew={reviewsSortByNew} user={user}/></Col>
                    <Col><GenreBubbles allBooks={allBooks}/></Col>
                </Row>
            </Container>
            }
        </div>
    )
}

export default HomeContent;