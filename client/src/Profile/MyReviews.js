import React from 'react';
import { Link } from 'react-router-dom';

function MyReviews({ userReviews }) {

    return (
        <div style={{ display: 'inline-block', marginBottom: 30, overflow: 'scroll', marginTop: 80, fontSize: 13 }}>
            <h4 style={{ fontSize: 18, backgroundColor:'#f7f4f1', display: 'inline-block', padding: '4px 6px 4px 6px', borderRadius: 4 }}>My Reviews</h4>
            {userReviews.length > 0 ?
            userReviews.map(review => (
                <div key={review.id}>
                    <h5 style={{ fontSize: 16 }}>{review.book.title} – {review.book.author}</h5>
                    <p>by {review.user.username}</p>
                    <p>{review.review_body}</p>
                </div>
            ))
            :
            <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: 13 }}>You don't have any reviews yet!<br></br>
                <Link to='/new-review' id='inlineLinkButton'>Create a review</Link> to add reviews to your nook.</p>
            </div>
            }
        </div>
    )
}

export default MyReviews;