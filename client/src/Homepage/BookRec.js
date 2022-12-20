import React, { useEffect, useState } from 'react'
    
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
                <div style={{ textAlign: 'center', backgroundColor: '#f7f4f1', borderRadius: 10, padding: 30, marginLeft: 0 }}>
                    <h3 style={{ fontSize: 18 }}>Book Recommendations</h3>
                    <p style={{ display: 'inline-block', rightMargin: 50, fontSize: 13}}>The wise booknook recommends:</p>
                    <div>
                        <img src={book.image_url} style={{ height: 135, objectFit: 'cover', overflow: 'hidden', borderRadius: 5 }}></img>
                        <br></br>
                        <p style={{ marginTop: 10, fontSize: 11 }}>{book.title}</p>
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