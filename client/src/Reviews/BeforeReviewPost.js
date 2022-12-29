import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BeforeReviewPost({ allBooks, user, setPost }) {

    // const [bookId, setBookId] = useState();
    const [rating, setRating] = useState('?');
    const [reviewBody, setReviewBody] = useState('Your review here');
    const [errors, setErrors] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [characterCount, setCharacterCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (allBooks === null) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [allBooks])

    function onReviewSubmit() {
        fetch('/api/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rating,
                review_body: reviewBody,
                user_id: user.id,
                book_id: selectedBook.id
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json().then(setPost(true))
            } else {
                r.json().then(e => setErrors(e.errors))
            }
        })
    }

    return (
        <div>
        {allBooks ?
            <div>
            <div style={{ marginTop: 64, marginBottom: 40 }}>
                <h4 style={{ marginBottom: 10, fontSize: 18,   display: 'inline-block', backgroundColor:'#f7f4f1', padding: 5, borderRadius: 5 }}>New Review</h4>
                <p style={{ fontSize: 14 }}>Tell us your thoughts on a book.</p>
            </div>
            <div style={{ width: '66rem', display: 'inline-block' }}>
                <Row>
                    <Col style={{ width: '22rem' }}>
                        <Row style={{ justifyContent: 'center', fontSize: 13, marginBottom: 12, width: '10rem' }}>
                            <select style={{ backgroundColor: 'transparent', border: '.95px solid #362c24', padding: '3px 6px 3px 2px', borderRadius: 3, fontSize: 13, color: '#362c24' }} onChange={((e) => {
                                // setBookId(e.target.value)
                                setSelectedBook(allBooks.filter(book => book.id == e.target.value)[0])
                            })}>
                                <option selected="true" disabled="disabled">Select book</option>
                                {allBooks.map(book => (
                                <option value={book.id}>{book.title}</option>
                                ))}
                            </select>
                        </Row>
                        <Row style={{ justifyContent: 'center', fontSize: 13, marginBottom: 12, width: '10rem' }}>
                            <select style={{ backgroundColor: 'transparent', border: '.95px solid #362c24', padding: '3px 6px 3px 2px', borderRadius: 3, fontSize: 13 }} onChange={((e) => setRating(e.target.value))}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </Row>
                        {/* <Row style={{ justifyContent: 'center', fontSize: 13, marginBottom: 12, width: '10rem' }}>
                            <select style={{ backgroundColor: 'transparent', border: '.95px solid #362c24', padding: '3px 6px 3px 2px', borderRadius: 3, fontSize: 13 }}>
                                <option selected="true" disabled="disabled">Select genre</option>
                                <option>Art</option>
                                <option>Business</option>
                                <option>Classics</option>
                                <option>Fantasy</option>
                                <option>Fiction</option>
                                <option>Horror</option>
                                <option>Manga</option>
                                <option>Mystery</option>
                                <option>Poetry</option>
                                <option>Romance</option>
                                <option>Science-Fiction</option>
                            </select>
                        </Row> */}
                        <Row style={{ justifyContent: 'left', fontSize: 13, marginBottom: 12, textAlign: 'left' }}>
                            <textarea type='paragraph_text' placeholder='Your review here' style={{ width: 400, height: 340, textAlign: 'left', padding: 6, whiteSpace: 'pre-line', borderRadius: 5, border: '.95px solid #362c24', resize: 'none' }} onChange={((e) => {
                                setReviewBody(e.target.value)
                                setCharacterCount(e.target.value.length)
                                })}>
                            </textarea>
                            <br></br>
                        </Row>
                    </Col>
                    <Col style={{ width: '22rem', height: 492.17 }}>
                        <Row style={{ justifyContent: 'center', fontSize: 13, marginBottom: 12, paddingBottom: 6 }}>
                            <div style={{ maxWidth: '30rem', wordBreak: 'break-word', textAlign: 'left', overflow: 'scroll', backgroundColor: '#f7f4f1', borderRadius: 10, padding: 30, whiteSpace: 'pre-line', height: 430 }}>
                                {selectedBook ? <h3 style={{ fontSize: 17 }}>{selectedBook.title} – Review</h3> : <h3 style={{ fontSize: 17 }}>Review</h3>}
                                <p style={{ marginTop: -5 }}>{rating}/5<br></br>
                                by {user.username}</p>
                                {reviewBody}
                            </div>
                        </Row>
                        <Row style={{ justifyContent: 'right', textAlign: 'right', paddingRight: 16 }}>
                            <div>
                                <button style={{ backgroundColor: '#6f5b4b', color: 'white', borderColor: 'transparent', borderRadius: 5, fontSize: 13, padding: '3px 8px 3px 8px', marginTop: 10 }} onClick={onReviewSubmit}>Save review</button>
                            </div>
                            {errors.length > 0 ?
                            <div style={{ marginTop: 35 }}>
                                {errors.map(e => <p>{e}</p>)}
                            </div>
                            : null}
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
        : null }
    </div>
    )
}

export default BeforeReviewPost;