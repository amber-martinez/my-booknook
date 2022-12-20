import React, { useEffect, useState } from 'react';
import NewestBooks from '../Homepage/NewestBooks'
import GenreBubbles from '../Homepage/GenreBubbles'
import RecentReviews from '../Homepage/RecentReviews';
import LoggedInWelcome from '../Homepage/LoggedInWelcome'
import SignUpForm from '../SignUpForm'
import BookRec from '../Homepage/BookRec';
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
        <div style={{ textAlign: 'center', marginLeft: 150, marginRight: 100 }}>
            {loading ?
            <div style={{ textAlign: 'center', marginTop: 245 }}>
                <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 100 }}></img> 
            </div>
            :
            <div style={{ marginTop: 65 }}>
                <Row style={{ justifyContent: 'left', marginLeft: 0 }} >
                    <Col xs lg='5' style={{ width: 750, marginRight: 80, justifyContent: 'left', padding: 0 }}>
                        <NewestBooks allBooks={allBooks} newestBooks={newestBooks}/>
                    </Col>
                    <Col xs lg='5' style={{ width: 400, marginLeft: 80 }}>
                        {user ? <LoggedInWelcome user={user}/> : <SignUpForm setUser={setUser}/>}
                    </Col>
                </Row>
                <Row style={{ marginTop: 60, justifyContent: 'left', marginLeft: 0 }}>
                    <Col xs lg='3' style={{ width: 750, justifyContent: 'left', padding: 0, marginRight: 80 }}>
                        <Genres/>
                    </Col>
                    <Col xs lg='5' style={{ width: 400, marginLeft: 80, marginTop: -170 }}>
                        {<BookRec/>}
                    </Col>
                </Row>
            </div>
            }
        </div>
    )
}

export default HomeContent;