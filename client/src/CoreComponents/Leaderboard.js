import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Rate } from 'antd';
import { Link } from 'react-router-dom';

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

    return (
        <div>
            {loading            
            ?
            <div style={{ textAlign: 'center', marginTop: 245 }}>
                <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 100 }}></img> 
            </div>
            :
            <div style={{ fontSize: 13, textAlign: 'center', justifyContent: 'center' }}>
                <h3 style={{ padding: 5, fontWeight: 600, backgroundColor: '#f7f4f1', borderRadius: 4, display: 'inline-block', fontSize: 18 }}>Books Leaderboard</h3>
                <p>The top 5 highest-rated books.</p>
                <div style={{ marginTop: 30 }}>
                    <ol style={{ textAlign: 'center', listStylePosition: 'inside', padding: 0  }}>
                        {reviewsByRating.map(review => (
                            <Link style={{ color: '#362c24' }} to={`/books/${review.id}`}>
                                <Card class="card text-center" key={review.id} style={{ display: 'inline-block', border: 'none', margin: 20, marginTop: 0, backgroundColor: 'transparent', maxWidth: 90, wordBreak: 'break-word', textAlign: 'center', verticalAlign: 'top', maxHeight: 161, marginRight: 30, marginLeft: 30 }}>
                                    <Card.Img src={review.image_url} style={{ height: 140, width: 90, objectFit: 'cover' }} />
                                    <Card.Body style={{ fontSize: 11, textAlign: 'center', marginTop: 10 }}>
                                    {/* <li style={{ margin: '10px 25px 10px 25px', fontSize: 15, fontWeight: 600, color: '#362c24' }}></li> */}
                                        <Rate disabled allowHalf defaultValue={review.average_rating} style={{ fontSize: 10 }} />
                                        <Card.Text style={{ marginTop: 10 }}>{review.average_rating}/5<br></br>
                                        {review.title}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        ))}
                    </ol>
                </div>
            </div>
            }
        </div>
    )
}

export default Leaderboard;