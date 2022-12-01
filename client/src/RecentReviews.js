import React from 'react';

function RecentReviews({ reviewsSortByNew }) {

    const newestReviews = reviewsSortByNew.map(review => {
        if (review.rating == 1) {
            return (
                <div key={review.id}>
                    <h5>{review.book.title} – {review.book.author}</h5>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <p>by {review.user.username}</p>
                    <p>{review.review_body}</p>
                </div>
            )
        } else if (review.rating == 2) {
            return (
                <div key={review.id}>
                    <h5>{review.book.title} – {review.book.author}</h5>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <p>by {review.user.username}</p>
                    <p>{review.review_body}</p>
                </div>
            )
        } else if (review.rating == 3) {
            return (
                <div key={review.id}>
                    <h5>{review.book.title} – {review.book.author}</h5>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <p>by {review.user.username}</p>
                    <p>{review.review_body}</p>
                </div>
            )
        } else if (review.rating == 4) {
            return (
                <div key={review.id}>
                    <h5>{review.book.title} – {review.book.author}</h5>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <p>by {review.user.username}</p>
                    <p>{review.review_body}</p>
                </div>
            )
        } else if (review.rating == 5) {
            return (
                <div key={review.id}>
                    <h5>{review.book.title} – {review.book.author}</h5>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <p>by {review.user.username}</p>
                    <p>{review.review_body}</p>
                </div>
            )
        }
    })

    return (
        <div>
            <div id='recentReviewsContainer'>
                <h3 id='popGenresHeader'>Recent Reviews</h3>
                <p>Quite the critic makes quite the taste.</p>
                {newestReviews}
            </div>
            <div style={{ textAlign: 'center' }}>
                <button id='loginToSeeReviews'>Log in to see full reviews!</button>
            </div>
        </div>
    )
}

export default RecentReviews;