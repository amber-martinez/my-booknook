import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CreateReview({ user, allBooks }) {

    const [bookId, setBookId] = useState();
    const [rating, setRating] = useState();
    const [reviewBody, setReviewBody] = useState();
    const [errors, setErrors] = useState([]);
    const [characterCount, setCharacterCount] = useState(0);
    const [post, setPost] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (user == null) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [user])

    function onBookIdChange(e) {
        setBookId(parseInt(e.target.value))
    }

    function onRatingChange(e) {
        setRating(e.target.value)
    }

    function onReviewBodyChange(e) {
        setReviewBody(e.target.value)
        setCharacterCount(e.target.value.length)
    }

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
                book_id: bookId
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
        <div style={{ textAlign: 'center' }}>
            {loading ?
            <div style={{ textAlign: 'center', marginTop: 245 }}>
                <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 100 }}></img> 
            </div>
            :
            user ?
            post ?
            <div style={{ marginTop: 64 }}>
                <img src='https://images.squarespace-cdn.com/content/v1/59c5803080bd5e5bb9c03e23/136d4d0a-d68e-4e5e-aee9-58769eadd670/BM_CHeckmark.png?format=1000w' style={{ textAlign: 'center', height: 100, marginBottom: 10 }}></img>
                <br></br>
                <h5 id='editProfileHeader'>Your review was posted!</h5>
            </div>
            : 
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
                        <div>
                            <p style={{ textAlign: 'right', fontSize: 13 }}>{characterCount} Characters</p>
                        </div>
                    </div>
                    <br></br>
                </div>
                <div>
                    <button id='actionButton' style={{ marginTop: 70 }} onClick={onReviewSubmit}>Save</button>
                    <br></br>
                    {errors.length > 0 ?
                    <div style={{ marginTop: 35 }}>
                        {errors.map(e => <p>{e}</p>)}
                    </div>
                    : null}
                </div>
            </div>
            
            :
            <div style={{ textAlign: 'center', marginTop: 91 }}>
                <h4 id='editProfileHeader' style={{ marginBottom: 0 }}>New Review</h4><br></br>
                <img src='https://i.gifer.com/origin/c9/c9be20ebec1e40b9e2ed8488253c44b0_w200.gif'></img>
                <h5 style={{ textAlign: 'center', marginTop: 15 }}>Oh no, you're not logged in!<br></br>Sign up or log in <Link to='/login' id='inlineLinkButton'>here.</Link></h5>
            </div>
        }
        </div>
        
    )
}

export default CreateReview;