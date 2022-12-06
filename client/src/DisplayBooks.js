import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DisplayBooks() {

    const [content, setContent] = useState(null)
    const [genre, setGenre] = useState(null)
    const [show, setShow] = useState(false)
    const [reviews, setReviews] = useState(null)

    function onClickReadReviews(e) {
        const bookId = parseInt(e.target.className)
        setShow(true)

        fetch(`/books/${bookId}`)
        .then(r => r.json())
        .then(book => {
            if (book.reviews.length == 0) {
                setReviews(
                    <div style={{ textAlign: 'center' }}>
                        <h5 style={{ backgroundColor: '#e9e5dc3a', textAlign: 'center', display: 'inline-block', marginBottom: 18 }}>Reviews for <strong>{book.title}</strong></h5>
                        <p style={{ marginBottom: 7 }}>This book doesn't have any reviews yet.</p>
                        <p>Read it? Create a review<Link to='/new-review' id='inlineLinkButton'> here</Link>.</p>
                    </div>
                )
            } else {
            setReviews(
                <div>
                    <h5 style={{ backgroundColor: '#e9e5dc3a', textAlign: 'center', display: 'inline-block', marginBottom: 18 }}>Reviews for <strong>{book.title}</strong></h5>
                    <div style={{ textAlign: 'left' }}>
                        {book.reviews.map(review => {
                                        if (review.rating == 1) {
                                            return (
                                                <div key={review.id}>
                                                    <h5 style={{ fontSize: 16 }}>{book.title} – {book.author}</h5>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    {/* <p>by {review.user.username}</p> */}
                                                    <p>{review.review_body}</p>
                                                </div>
                                            )
                                        } else if (review.rating == 2) {
                                            return (
                                                <div key={review.id}>
                                                    <h5>{book.title} – {book.author}</h5>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    {/* <p>by {review.user.username}</p> */}
                                                    <p>{review.review_body}</p>
                                                </div>
                                            )
                                        } else if (review.rating == 3) {
                                            return (
                                                <div key={review.id}>
                                                    <h5>{book.title} – {book.author}</h5>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    {/* <p>by {review.user.username}</p> */}
                                                    <p>{review.review_body}</p>
                                                </div>
                                            )
                                        } else if (review.rating == 4) {
                                            return (
                                                <div key={review.id}>
                                                    <h5>{book.title} – {book.author}</h5>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    {/* <p>by {review.user.username}</p> */}
                                                    <p>{review.review_body}</p>
                                                </div>
                                            )
                                        } else if (review.rating == 5) {
                                            return (
                                                <div key={review.id}>
                                                    <h5>{book.title} – {book.author}</h5>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    {/* <p>by {review.user.username}</p> */}
                                                    <p>{review.review_body}</p>
                                                </div>
                                            )
                                        }
                            })}
                    </div>
                </div>
            )
            }
        })
        
    }


    useEffect(() => {
        fetch(`${window.location.pathname}`)
        .then(r => r.json())
        .then(books => {

            setContent(books.map(book => (
                <Row style={{ marginBottom: 15, display: 'inline-block', width: 180, minheight: 200, maxheight: 200, verticalAlign: 'top', borderColor: 'transparent', padding: 3, textAlign: 'center', display: 'inline-block' }} class="card text-center" key={book.id}>
                    <div>
                        <img src={book.image_url} style={{ height: 120, width: 80, objectFit: 'cover' }}></img>
                    </div>
                    <div style={{ paddingTop: 11, verticalAlign: 'top' }}>
                        <h6 style={{ fontWeight: 600, color: '#362c24' }} id='bookTitle'>{book.title}</h6>
                        <p style={{ fontSize: 15, fontWeight: 400, marginTop: -5 }}>by {book.author}</p>
                        <button onClick={onClickReadReviews} id='actionButton' className={book.id} style={{ fontSize: 14 }}>Read Reviews</button>
                    </div>
                </Row>
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
            <div>
                <h3 style={{ padding: 5, fontWeight: 600, backgroundColor: '#e9e5dc3a', textAlign: 'left', display: 'inline-block', margin: '50px 0px 0px 100px' }}>{genre} Books</h3>
                <div style={{ margin: '34px 100px 100px 105px' }}>
                    <Row>
                        <Col>
                            {content}
                        </Col>
                        <Col>
                            <div style={{ display: 'inline-block', paddingLeft: 10, verticalAlign: 'top', textAlign: 'center' }}>
                                {show ? reviews : null }
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