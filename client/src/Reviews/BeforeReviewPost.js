import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BeforeReviewPost({ allBooks }) {

    const [bookId, setBookId] = useState(2);
    const [rating, setRating] = useState('?');
    const [reviewBody, setReviewBody] = useState('Your review here');
    const [errors, setErrors] = useState([]);
    const [characterCount, setCharacterCount] = useState(0);
    const [post, setPost] = useState(false)
    const [loading, setLoading] = useState(false)

    const selectedBook = (allBooks.find(book => book.id == bookId));


    return (
        <div>
            <div style={{ marginTop: 64, marginBottom: 40 }}>
                <h4 style={{ marginBottom: 10, fontSize: 18,   display: 'inline-block', backgroundColor:'#f7f4f1', padding: 5, borderRadius: 5 }}>New Review</h4>
                <p style={{ fontSize: 14 }}>Tell us your thoughts on a book.</p>
            </div>
        <div style={{ width: '66rem', display: 'inline-block' }}>
            <Row>
                <Col style={{ width: '22rem' }}>
                    <Row style={{ justifyContent: 'center', fontSize: 13, marginBottom: 12, width: '10rem' }}>
                        <select style={{ backgroundColor: 'transparent', border: '.95px solid #362c24', padding: '3px 6px 3px 2px', borderRadius: 3, fontSize: 13, color: '#362c24' }} onChange={((e) => setBookId(e.target.value))}>
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
                    <Row style={{ justifyContent: 'center', fontSize: 13, marginBottom: 12, width: '10rem' }}>
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
                    </Row>
                    <Row style={{ justifyContent: 'left', fontSize: 13, marginBottom: 12, textAlign: 'left' }}>
                        <textarea type='paragraph_text' placeholder='Your review here' style={{ width: 370, height: 295, textAlign: 'left', padding: 6, whiteSpace: 'pre-line', borderRadius: 5, border: '.95px solid #362c24' }} onChange={((e) => {
                            setReviewBody(e.target.value)
                            setCharacterCount(e.target.value.length)
                            })}>
                        </textarea>
                        <br></br>
                    </Row>
                </Col>
                <Col style={{ width: '22rem' }} >
                    <Row style={{ justifyContent: 'center', fontSize: 13, marginBottom: 12 }}>
                        <figure style={{ maxWidth: '8rem', wordBreak: 'break-word' }}>
                            <img src={selectedBook.image_url} style={{ height: 130, width: 90, objectFit: 'cover', overflow: 'hidden', borderRadius: 5 }}></img>
                            <figcaption style={{ marginTop: 8, fontSize: 11 }}><strong>{rating}/5</strong></figcaption>
                            <figcaption style={{ marginTop: 2, fontSize: 11 }}><strong>{selectedBook.title}</strong></figcaption>
                            <figcaption style={{fontSize: 11, marginTop: 2 }}>{selectedBook.author}</figcaption>
                        </figure>
                    </Row>
                </Col>
                    <Col style={{ width: '22rem', height: 492.17 }}>
                        <Row style={{ justifyContent: 'center', fontSize: 13, marginBottom: 12, paddingBottom: 6 }}>
                            <div style={{ maxWidth: '30rem', wordBreak: 'break-word', textAlign: 'left', overflow: 'scroll', backgroundColor: '#f7f4f1', borderRadius: 10, padding: 30, whiteSpace: 'pre-line', height: 430 }}>
                                {reviewBody}
                            </div>
                        </Row>
                        <Row style={{ justifyContent: 'right', textAlign: 'right' }}>
                            <div>
                                <button style={{ backgroundColor: '#6f5b4b', color: 'white', borderColor: 'transparent', borderRadius: 5, fontSize: 13, padding: '3px 8px 3px 8px', marginTop: 10 }}>Save review</button>
                            </div>
                        </Row>
                    </Col>
            </Row>

            {/* <div>
                <button id='actionButton' style={{ marginTop: 70 }} onClick={onReviewSubmit}>Save</button>
                <br></br>
                {errors.length > 0 ?
                <div style={{ marginTop: 35 }}>
                    {errors.map(e => <p>{e}</p>)}
                </div>
                : null}
            </div>  */}
            </div>
        </div>
    )
}

export default BeforeReviewPost;