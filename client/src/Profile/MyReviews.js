import React from 'react';
import { Link } from 'react-router-dom';

function MyReviews({ user }) {

    return (
        <div style={{  marginTop: 45 }}>
            <div>
                <h4 style={{ fontSize: 18, backgroundColor:'#f7f4f1', display: 'inline-block', padding: '4px 4px 4px 4px', borderRadius: 4, marginBottom: 22 }}>My Reviews</h4>
            </div>
            <div style={{ display: 'inline-block', marginBottom: 50, overflow: 'scroll', fontSize: 13, height: 450 }}>
                {user.reviews.length > 0 ?
                user.reviews.map(review => (
                    <div key={review.id} style={{ textAlign: 'left',  marginBottom: 22 }}>
                        <h5 style={{ fontSize: 16 }}>{review.book.title} – {review.book.author}</h5>
                        <p style={{ marginTop: -5 }}>{review.rating}/5<br></br>
                        by {review.user.username}</p>
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
        </div>
    )
}

export default MyReviews;