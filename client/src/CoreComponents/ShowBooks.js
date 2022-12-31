import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Rate } from 'antd';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function ShowBooks() {

    const [bookData, setBookData] = useState([])
    const { genre } = useParams();

    useEffect(() => {
        fetch(`/api/${genre}`)
        .then(r => r.json())
        .then(data => setBookData(data))
    }, [])

    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                {genre == 'books' ?
                <h3 style={{ padding: 5, fontWeight: 600, backgroundColor: '#f7f4f1', borderRadius: 4, display: 'inline-block', fontSize: 18, marginBottom: 30 }}>All Books</h3>
                :
                <h3 style={{ padding: 5, fontWeight: 600, backgroundColor: '#f7f4f1', borderRadius: 4, display: 'inline-block', fontSize: 18, marginBottom: 30 }}>{genre}</h3>
                }
            </div>
            <div>
                {bookData.length ? 
                bookData.map(book => (
                    <Card class="card text-center" key={book.id} style={{ display: 'inline-block', border: 'none', margin: 20, marginTop: 0, backgroundColor: 'transparent', maxWidth: 90, wordBreak: 'break-word', textAlign: 'center', verticalAlign: 'top', maxHeight: 161, marginRight: 30, marginLeft: 30 }}>
                        <Card.Img src={book.image_url} style={{ height: 140, width: 90, objectFit: 'cover' }} />
                        <Card.Body style={{ fontSize: 11, textAlign: 'center', marginTop: 10 }}>
                            {book.average_rating === null ?
                            <p style={{ marginBottom: 5 }}>No reviews yet</p>
                            :
                            <Rate disabled allowHalf defaultValue={book.average_rating} style={{ fontSize: 10 }} />
                            }
                            <Card.Text style={{ marginTop: 5 }}>
                            {book.title}</Card.Text>
                        </Card.Body>
                    </Card>
                ))
                :
                <p style={{ fontSize: 15 }}>No books for this category yet.</p>
                }
            </div>
        </div>
    )
}

export default ShowBooks;