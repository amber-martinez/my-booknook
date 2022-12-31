import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Rate } from 'antd';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function BookPage() {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        if (book === null) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [book])

    useEffect(() => {
        fetch(`/api/books/${id}`)
        .then(r => r.json())
        .then(data => setBook(data))
    }, [])

    return (
        <div style={{ marginLeft: 200, marginRight: 200 }}>
            {loading ?
            null
            :
            <Row>
            <Col xs lg='5'>
                    <div>
                        <h4 style={{ fontSize: 18, backgroundColor:'#f7f4f1', display: 'inline-block', padding: '4px 4px 4px 4px', borderRadius: 4, marginBottom: 22 }}>Reviews</h4>
                    </div>
                    <div style={{ display: 'inline-block', marginBottom: 50, overflow: 'scroll', fontSize: 13, height: 600 }}>
                        {book.reviews.length ?
                        book.reviews.map(review => (
                            <div key={review.id} style={{ textAlign: 'left',  marginBottom: 22 }}>
                                <Rate disabled allowHalf defaultValue={review.rating} style={{ fontSize: 13, marginTop: -5 }} />
                                <p>by {review.user.username}</p>
                                <p>{review.review_body}</p>
                            </div>
                        ))
                        :
                        <div style={{ textAlign: 'center' }}>
                            <p>No reviews yet.</p>
                        </div>
                        }
                    </div>
            </Col>
            <Col xs lg='5' style={{ textAlign: 'right' }}>
                <Card class="card text-center" key={book.id} style={{ display: 'inline-block', border: 'none', backgroundColor: 'transparent', wordBreak: 'break-word', textAlign: 'center', verticalAlign: 'top', marginRight: 30, marginLeft: 30, alignItems: 'center' }}>
                    <Card.Img src={book.image_url} style={{ height: 150, width: 100, objectFit: 'cover' }} />
                    <Card.Body style={{ fontSize: 11, textAlign: 'center', marginTop: 10 }}>
                        <Rate disabled allowHalf defaultValue={book.average_rating} style={{ fontSize: 18 }} />
                        <Card.Text style={{ marginTop: 10, fontSize: 17 }}>{book.title}</Card.Text>
                        <button style={{ width: 80, marginTop: -3, padding:'3px 0px 3px 0px', textAlign: 'center', border: 'transparent', backgroundColor: '#f7f4f1', borderRadius: 5, color: '#362c24' }}><Link to='/new-review' style={{ color: '#362c24' }}>Create review</Link></button><br></br>
                    </Card.Body>
                </Card>
            </Col>
            </Row>
            }
        </div>
    )
}

export default BookPage;