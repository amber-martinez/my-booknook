import React, { useEffect, useState } from 'react';
import NewestBooks from '../Homepage/NewestBooks'
import LoggedInWelcome from '../Homepage/LoggedInWelcome'
import SignUpForm from '../Homepage/SignUpForm';
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
        <div style={{ textAlign: 'center', marginLeft: 200, marginRight: 200 }}>
            {loading ?
            <div style={{ textAlign: 'center', marginTop: 245 }}>
                <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 100 }}></img> 
            </div>
            :
            <div>
                <Row style={{ justifyContent: 'left', marginLeft: 0, marginBottom: 0 }} >
                    <Col xs lg='5' style={{ width: 750, marginRight: 40, justifyContent: 'left', padding: 0 }}>
                        <NewestBooks allBooks={allBooks} newestBooks={newestBooks}/>
                    </Col>
                    {user ?
                    <Col xs lg='5' style={{ width: 400, marginLeft: 40 }}>
                        <LoggedInWelcome user={user}/>
                    </Col>
                    :
                    <Col xs lg='5' style={{ width: 480, marginLeft: 40 }}>
                        <SignUpForm setUser={setUser}/>
                    </Col>
                    }
                </Row>
                <Row style={{ marginTop: 30, justifyContent: 'left', marginLeft: 0 }}>
                    <Col xs lg='3' style={{ width: 750, justifyContent: 'left', padding: 0, marginRight: 40 }}>
                        <Genres/>
                    </Col>
                    {user ?
                    <Col xs lg='5' style={{ width: 400, marginLeft: 40, marginTop: -167 }}>
                        {<BookRec/>}
                    </Col>
                    :
                    null
                    }
                </Row>
            </div>
            }
        </div>
    )
}

export default HomeContent;