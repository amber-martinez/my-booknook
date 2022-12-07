import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Search({ allBooks }) {

    const [search, setSearch] = useState(null)
    const [results, setResults] = useState([])
    const [show, setShow] = useState(false)
    const [reviews, setReviews] = useState(null)

    function onSearchInput(e) {
        e.preventDefault()

        const search = e.target.value

        console.log(search == null)

        if (search == '') {
            setSearch(false)
        } else {
            setSearch(true)
        setResults(allBooks.filter(book => {
            if (book.title.replace(/\s+/g, '').toLowerCase().includes(search.toLowerCase())) {
                return book
            } else {
                setResults(<p>No results yet</p>)
            }
        }))
        }
    }

    function onClickReadReviews(e) {
        const bookId = parseInt(e.target.className)
        console.log(bookId)
        setShow(true)

        fetch(`/api/books/${bookId}`)
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

    console.log(search, results)

    return (
        <div style={{ margin: '50px 0px 0px 100px' }}>
            <h3 style={{ padding: 5, fontWeight: 600, backgroundColor: '#e9e5dc3a', textAlign: 'left', display: 'inline-block' }}>Search</h3>
            <div>
                <form style={{ marginBottom: 34 }}>
                    <input type='text' onChange={onSearchInput} id='searchBox' placeholder='Find books'></input>
                </form>
            </div>
            <div>
                {search ? 
                    <Row>
                        <Col>
                {results.map(result => (
                        <div style={{ marginBottom: 26 }}>
                            <div>
                                <img src={result.image_url} style={{ height: 120, width: 80, objectFit: 'cover' }}></img>
                            </div>
                            <div style={{ paddingTop: 10 }}>
                                <h6 style={{ fontWeight: 600, color: '#362c24', marginBottom: 2 }} id='bookTitle'>{result.title}</h6>
                                <p style={{ fontSize: 15, fontWeight: 400, marginBottom: 6 }}>by {result.author}</p>
                                <button id='actionButton' style={{ fontSize: 14 }} onClick={onClickReadReviews} className={result.id}>Read Reviews</button>
                            </div>
                        </div>
                ))}
                </Col>
                <Col>
                        <div style={{ margin: '0px 100px 26px 0px', display: 'inline-block' }}>
                            <div style={{ display: 'inline-block', paddingLeft: 10, verticalAlign: 'top', textAlign: 'center' }}>
                                {show ? reviews : null }
                            </div>
                        </div>
                        </Col>
                        </Row>
                : <p>No results yet</p> }
            </div>
        </div>
    )
}

export default Search;