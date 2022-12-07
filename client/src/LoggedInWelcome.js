import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function LoggedInWelcome({ user }) {
    
    const [bookRec, setBookRec] = useState();
    const [loadingStatus, setLoadingStatus] = useState(true)


    useEffect(() => {
        if (user.username != null) {
            setLoadingStatus(false)

            fetch('/api/random-book', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(r => r.json())
            .then(book => {
                setBookRec(
                    <div>
                        <p style={{ display: 'inline-block', rightMargin: 50}}>The wise booknook recommends:</p>
                        <div>
                            <img src={book.image_url} style={{ height: 147 }}></img>
                            <br></br>
                            <p style={{ marginTop: 7 }}>{book.title}</p>
                        </div>
                    </div>
                )
            })
        }



    }, [user])
    
    
    return (
        <div id='loggedInWelcomeContainer'>
            {loadingStatus ?
            <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 60, marginTop: 210 }}></img>
            :
            <div>
                <h3 style={{ marginTop: 44, textAlign: 'center', color: '#362c24' }}>Howdy, {user.username}</h3>
                <p>Read anything new lately?</p>
                <button id='loggedInWelcomeButtons' style={{ marginLeft: 15 }}><Link to='/add-book' id='linkButton'>Add a book</Link></button>
                <button id='loggedInWelcomeButtons' style={{ marginLeft: 15 }}><Link to='/new-review' id='linkButton'>Write a review</Link></button>
                <div style={{ marginTop: 10 }}>
                    {bookRec}
                </div>
            </div>
            }
        </div>
    )
}

export default LoggedInWelcome;