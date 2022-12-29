import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BeforeReviewPost from './BeforeReviewPost';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CreateReview({ allBooks, user }) {

    const [bookId, setBookId] = useState();
    const [rating, setRating] = useState();
    const [reviewBody, setReviewBody] = useState();
    const [errors, setErrors] = useState([]);
    const [characterCount, setCharacterCount] = useState(0);
    const [post, setPost] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user == null) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [allBooks])

    return (
        <div style={{ textAlign: 'center' }}>
            {loading ?
            <div style={{ textAlign: 'center', marginTop: 245 }}>
                <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 100 }}></img> 
            </div>
            :
            allBooks.length > 0 ?
            post ?
            <div style={{ marginTop: 64 }}>
                <img src='https://images.squarespace-cdn.com/content/v1/59c5803080bd5e5bb9c03e23/136d4d0a-d68e-4e5e-aee9-58769eadd670/BM_CHeckmark.png?format=1000w' style={{ textAlign: 'center', height: 70, marginBottom: 10 }}></img>
                <br></br>
                <h5 style={{ fontSize: 15 }}>Your review was posted!</h5>
            </div>
            : 
            <BeforeReviewPost allBooks={allBooks} user={user} setPost={setPost}/>
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