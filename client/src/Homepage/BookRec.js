import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
    
function BookRec() {
    
    const [bookRec, setBookRec] = useState();

    useEffect(() => {
        fetch('/api/random-book', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(r => r.json())
        .then(book => {
            setBookRec(
                <div style={{ textAlign: 'center', backgroundColor: '#f7f4f1', borderRadius: 10, padding: 19, marginLeft: 0, border: 'solid 1px #f2efeb' }}>
                    <h3 style={{ fontSize: 18, marginTop: 10 }}>Book Recommendations</h3>
                    <p style={{ display: 'inline-block', rightMargin: 50, fontSize: 13, marginBottom: 25 }}>The wise booknook recommends:</p>
                    <div>
                        <Link style={{ color: '#362c24' }} to={`/books/${book.id}`}>
                            <img src={book.image_url} style={{ height: 135, objectFit: 'cover', overflow: 'hidden', borderRadius: 5 }}></img>
                            <br></br>
                            <p style={{ marginTop: 19, fontSize: 12 }}><strong>{book.title}</strong></p>
                            <p style={{ marginTop: -15, fontSize: 11 }}>{book.author}</p>
                        </Link>
                    </div>
                </div>
            )
        })
    }, [])

    return (
        <div>
            {bookRec}
        </div>
    )

}

export default BookRec;