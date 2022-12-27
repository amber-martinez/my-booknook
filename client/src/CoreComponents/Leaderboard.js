import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function Leaderboard({ user }) {

    const [reviewsByRating, setReviewsByRating] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/top-rated-books')
        .then(r => r.json())
        .then(data => setReviewsByRating(data))
    }, [])

    useEffect(() => {
        if (user == null) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [user])

    // find way to populate stars in a shorter way

    return (
        <div>
            {loading            
            ?
            <div style={{ textAlign: 'center', marginTop: 245 }}>
                <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 100 }}></img> 
            </div>
            :
            <div style={{ fontSize: 13, textAlign: 'center' }}>
                <h3 style={{ padding: 5, fontWeight: 600, backgroundColor: '#e9e5dc3a', display: 'inline-block', marginTop: 64, fontSize: 18 }}>Books Leaderboard</h3>
                <p>Books from A to Z, starting with the highest rated.</p>
                <div id='leaderboardListGroup'>
                    <ol style={{ textAlign: 'center', listStylePosition: 'inside' }}>
                        {reviewsByRating.sort((a, b) => b.avg_rating - a.avg_rating).slice(0, 10).map(review => (
                                <Card class="card text-center" key={review.id} style={{ display: 'inline-block', border: 'none', margin: 20, marginTop: 0, backgroundColor: 'transparent', maxWidth: 90, wordBreak: 'break-word', textAlign: 'center', verticalAlign: 'top', maxHeight: 161 }}>
                                    <Card.Img src={review.image_url} style={{ height: 140, width: 90, objectFit: 'cover' }} />
                                    <li style={{ margin: '10px 25px 10px 25px', fontSize: 13 }}></li>
                                    <Card.Body style={{ fontSize: 11, textAlign: 'center', marginTop: 10 }}>
                                        <Card.Text>{review.avg_rating}/5</Card.Text>
                                        <Card.Text>{review.title}</Card.Text>
                                    </Card.Body>
                                </Card>
                        ))}
                    </ol>
                </div>
            </div>
            }
        </div>
    )
}

export default Leaderboard;