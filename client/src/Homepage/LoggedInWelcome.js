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
                        <p style={{ display: 'inline-block', rightMargin: 50, fontSize: 13}}>The wise booknook recommends:</p>
                        <div>
                            <img src={book.image_url} style={{ height: 135, objectFit: 'cover', overflow: 'hidden', borderRadius: 5 }}></img>
                            <br></br>
                            <p style={{ marginTop: 10, fontSize: 11 }}>{book.title}</p>
                        </div>
                    </div>
                )
            })
        }



    }, [user])
    
    
    return (
        <div style={{ textAlign: 'center', backgroundColor: '#f7f4f1', borderRadius: 10, padding: '30px 30px 30px 30px' }}>
            {loadingStatus ?
            <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 60 }}></img>
            :
            <div>
                <h3 style={{ color: '#362c24', fontSize: 18 }}>Howdy, {user.username}</h3>
                <p style={{ fontSize: 13 }}>Read anything new lately?</p>
                <button style={{ marginLeft: 15, borderRadius: 5, border: '1px solid #eceae783', backgroundColor: '#eceae783', color: '#6f5b4b', fontSize: 13, padding: '3px 2px 3px 2px'  }}><Link to='/add-book' id='linkButton'>Add a book</Link></button>
                <button style={{ marginLeft: 15, borderRadius: 5, border: '1px solid #eceae783', backgroundColor: '#eceae783', color: '#6f5b4b', fontSize: 13, padding: '3px 2px 3px 2px'  }}><Link to='/new-review' id='linkButton'>Write a review</Link></button>
                {/* <div style={{ marginTop: 10 }}>
                    {bookRec}
                </div> */}
            </div>
            }
        </div>
    )
}

export default LoggedInWelcome;