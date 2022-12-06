import React, { useState } from 'react'

function CreateReview({ user, allBooks }) {

    const [bookId, setBookId] = useState()
    const [rating, setRating] = useState()
    const [reviewBody, setReviewBody] = useState()
    const [errors, setErrors] = useState([])

    function onBookIdChange(e) {
        setBookId(parseInt(e.target.value))
    }

    function onRatingChange(e) {
        setRating(e.target.value)
    }

    function onReviewBodyChange(e) {
        setReviewBody(e.target.value)
    }

    function onReviewSubmit() {
        
        fetch('/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rating,
                review_body: reviewBody,
                user_id: user.id,
                book_id: bookId
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json(data => console.log(data))
            } else {
                r.json(e => setErrors(e.errors))
            }
        })
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <div style={{ marginTop: 64 }}>
                    <h4 id='editProfileHeader'>New Review</h4>
                </div>
                <div style={{ display: 'inline-block', verticalAlign: 'top', marginRight: 30 }}>
                    <p style={{ textAlign: 'left', marginBottom: 40 }}>Book</p>
                    <p style={{ textAlign: 'left', marginBottom: 40 }}>Rating</p>
                    <p style={{ textAlign: 'left', marginBottom: 40 }}>Review</p>
                </div>
                <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
                    <div style={{ display: 'inline-block', textAlign: 'left' }}>
                        <select style={{ marginBottom: 30 }} onChange={onBookIdChange}>
                            {allBooks.map(book => (
                                <option value={book.id}>{book.title}</option>
                            ))}
                        </select>
                        <br></br>
                        <select style={{ marginBottom: 35 }} onChange={onRatingChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <br></br>
                        <textarea type='paragraph_text' style={{ width: 370, height: 350 }} onChange={onReviewBodyChange}></textarea>
                    </div>
                    <br></br>
                </div>
                <div>
                    <button id='actionButton' style={{ marginTop: 70 }} >Save</button>
                    <br></br>
                    {/* {errors.map(e => <p style={{ marginTop: 20 }}>{e}</p>)} */}
                </div>
            </div>
        </div>
    )
}

export default CreateReview;