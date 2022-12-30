import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Rate } from 'antd';

function DisplayBooks() {

    const [content, setContent] = useState(null)
    const [genre, setGenre] = useState(null)
    const [show, setShow] = useState(false)
    const [reviews, setReviews] = useState(null)
    const [popupReviews, setPopupReviews] = useState(null)

    function onClickReadReviews(e) {
        const bookId = parseInt(e.target.className)
        setShow(true)

        fetch(`/api/books/${bookId}`)
        .then(r => r.json())
        .then(book => {
            console.log(book.reviews)
            if (book.reviews.length == 0) {
                setReviews(
                    <div id='popupReviewsContainer' style={{ textAlign: 'center' }}>
                        <h5 style={{ backgroundColor: '#e9e5dc3a', textAlign: 'center', display: 'inline-block', marginBottom: 18 }}>Reviews for <strong>{book.title}</strong></h5>
                        <p style={{ marginBottom: 7 }}>This book doesn't have any reviews yet.</p>
                        <p>Read it? Create a review<Link to='/new-review' id='inlineLinkButton'> here</Link>.</p>
                    </div>
                )
            } else {

            setReviews(
                <div id='popupReviewsContainer'>
                    <h5 style={{ backgroundColor: '#e9e5dc3a', textAlign: 'center', display: 'inline-block', marginBottom: 18 }}>Reviews for <strong>{book.title}</strong></h5>
                    <div style={{ textAlign: 'left' }}>
                        {book.reviews.map(review => {
                            <div key={review.id}>
                                <button id='reviewsX' onClick={(() => {
                                    setReviews(null)
                                    setShow(false)})}>x
                                </button>
                                <h5 style={{ fontSize: 16 }}>{book.title} – {book.author}</h5>
                                <Rate disabled allowHalf defaultValue={book.average_rating} style={{ fontSize: 10, marginTop: -5 }} />
                                <p>{review.review_body}</p>
                            </div>
                        })}
                    </div>
                </div>
            )
            }
        })
        
    }


    useEffect(() => {
        fetch(`/api/${window.location.pathname}`)
        .then(r => r.json())
        .then(books => {

            setContent(books.map(book => (
                <div style={{ textAlign: 'center' }}>
                <Row style={{ marginBottom: 15, display: 'inline-block', width: 180, height: 250, verticalAlign: 'bottom', borderColor: 'transparent', padding: 6, textAlign: 'center', display: 'inline-block' }} class="card text-center" key={book.id}>
                    <div>
                        <img src={book.image_url} style={{ height: 120, width: 80, objectFit: 'cover' }}></img>
                    </div>
                    <div style={{ paddingTop: 11, verticalAlign: 'top' }}>
                        <h6 style={{ fontWeight: 600, color: '#362c24' }} id='bookTitle'>{book.title}</h6>
                        <p style={{ fontSize: 15, fontWeight: 400, marginTop: -5, marginBottom: 5 }}>by {book.author}</p>
                        <button onClick={onClickReadReviews} id='actionButton' className={book.id} style={{ fontSize: 14 }}>Read Reviews</button>
                    </div>
                </Row>
                </div>
            )))

            if (window.location.pathname != '/books') {
                setGenre(books[0].genre)
            } else {
                setGenre('All')
            }

        })
    }, [reviews, show])

    return (
        <div>
            {content ?
            <div style={{ textAlign: 'center', marginTop: 40 }}>
                <h3 id='genreBooksHeader'>{genre} Books</h3>
                <div style={{ textAlign: 'center' }}>
                    <Row>
                        <Col>
                            {content}
                        </Col>
                        <Col>
                            <div id='displayBooksContainer' style={{ display: 'inline-block', paddingLeft: 10, verticalAlign: 'top', textAlign: 'center' }}>
                                {show ?
                                reviews
                                :
                                <div id='clickReadReviews'>
                                    <h5 style={{ backgroundColor: '#e9e5dc3a' }}>Click 'Read Reviews' to see reviews here.</h5> 
                                </div>
                                }
                            </div>
                        </Col>
                    </Row>
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