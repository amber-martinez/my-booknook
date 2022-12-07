import React, { useEffect, useState } from 'react'

function Leaderboard({ user }) {

    const [reviewsByRating, setReviewsByRating] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/top-rated-books')
        .then(r => r.json())
        .then(data => setReviewsByRating(data))
    }, [])

    console.log(reviewsByRating)

    useEffect(() => {
        if (user == null) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [user])

    return (
        <div>
            {loading            
            ?
            <div style={{ textAlign: 'center', marginTop: 245 }}>
                <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 100 }}></img> 
            </div>
            :
            <div>
                <h3 style={{ padding: 5, fontWeight: 600, backgroundColor: '#e9e5dc3a', textAlign: 'left', display: 'inline-block', margin: '50px 0px 0px 100px' }}>Books Leaderboard</h3>
                <p style={{ margin: '8px 0px 0px 105px' }}>Books from A to Z, starting with the highest rated.</p>
                <div style={{ margin: '34px 100px 100px 105px' }}>
                    <ol>
                        {reviewsByRating.sort((a, b) => b.avg_rating - a.avg_rating).slice(0, 10).map(review => (
                            <li>
                                <div key={review.id}>
                                <div style={{ display: 'inline-block', verticalAlign: 'top', marginBottom: 15, marginLeft: 6 }}>
                                    <img src={review.image_url} style={{ height: 120, width: 80, objectFit: 'cover' }}></img>
                                </div>
                                <div style={{ marginBottom: 15, display: 'inline-block' }}>
                                <div style={{ display: 'inline-block', marginLeft: 10, verticalAlign: 'top' }}>
                                    <h6 style={{ fontWeight: 600, color: '#362c24' }} id='bookTitle'>{review.title}</h6>
                                    <p>{review.avg_rating}/5</p>
                                </div>
                                </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
            }
        </div>
    )
}

export default Leaderboard;