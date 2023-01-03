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

    return (
        <div className='hidden' style={{ textAlign: 'center', marginLeft: 200, marginRight: 200 }}>
            {loading ?
            <div style={{ textAlign: 'center', marginTop: 245 }}>
                <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 100 }}></img> 
            </div>
            :
            <div>
                <Row>
                <Col style={{ justifyContent: 'left', marginLeft: 0, marginBottom: 0 }} >
                    <Row style={{ width: 750, marginRight: 40, justifyContent: 'left', padding: 0, marginBottom: 30 }}>
                        <NewestBooks allBooks={allBooks} newestBooks={newestBooks}/>
                    </Row>
                    <Row style={{ width: 750, justifyContent: 'left', padding: 0, marginRight: 40 }}>
                        <Genres/>
                    </Row>
                </Col>
                <Col style={{ justifyContent: 'left', marginLeft: 0 }}>
                    {user ?
                    <div>
                        <Row style={{ width: 400, marginLeft: 40, marginBottom: 30, padding: 0 }}>
                            <LoggedInWelcome user={user}/>
                        </Row>
                        <Row style={{ width: 400, marginLeft: 40, padding: 0 }}>
                            {<BookRec/>}
                        </Row>
                    </div>
                    :
                    <Row style={{ width: 480, marginLeft: 40 }}>
                        <SignUpForm setUser={setUser}/>
                    </Row>
                    }
                </Col>
                </Row>
            </div>
            }
        </div>
    )
}

export default HomeContent;