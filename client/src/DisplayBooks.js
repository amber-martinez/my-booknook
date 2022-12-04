import React, { useEffect, useState } from 'react';

function DisplayBooks() {

    const [content, setContent] = useState(null)
    const [genre, setGenre] = useState(null)

    useEffect(() => {
        fetch(`${window.location.pathname}`)
        .then(r => r.json())
        .then(books => {
            console.log(books)

            setContent(books.map(book => (
                <div style={{ marginBottom: 15 }}>
                    <div style={{ display: 'inline-block' }}>
                        <img src={book.image_url} style={{ height: 120, width: 80, objectFit: 'cover' }}></img>
                    </div>
                    <div style={{ display: 'inline-block', paddingLeft: 10, verticalAlign: 'top' }}>
                        <h6 style={{ fontWeight: 600, color: '#362c24' }} id='bookTitle'>{book.title}</h6>
                        <p style={{ fontSize: 15, fontWeight: 400 }}>by {book.author}</p>
                        <button id='actionButton' style={{ fontSize: 14 }}>Read Reviews</button>
                    </div>
                </div>
            )))

            if (window.location.pathname != '/books') {
                setGenre(books[0].genre)
            } else {
                setGenre('All')
            }

        })
    }, [])

    console.log(genre)

    return (
        <div>
            {content ?
            <div>
                <h3 style={{ padding: 5, fontWeight: 600, backgroundColor: '#e9e5dc3a', textAlign: 'left', display: 'inline-block', margin: '50px 0px 0px 100px' }}>{genre} Books</h3>
                <div style={{ margin: '34px 100px 100px 105px' }}>
                    {content} 
                </div>
            </div>
            : 
            <div style={{ textAlign: 'center', marginTop: 245 }}>
                <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 100 }}></img> 
            </div>
            }
        </div>
    )

}

export default DisplayBooks;