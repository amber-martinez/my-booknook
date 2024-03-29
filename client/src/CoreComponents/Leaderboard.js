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
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    entry.target.classList.add('show')
                } else {
                    entry.target.classList.remove('show')
                }
            });
        })
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el))
    }, [user])

    return (
        <div class='hidden'>
            {loading            
            ?
            <div style={{ textAlign: 'center', marginTop: 245 }}>
                <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 100 }}></img> 
            </div>
            :
            <div style={{ fontSize: 13, textAlign: 'center', justifyContent: 'center' }}>
                <h3 style={{ padding: 5, fontWeight: 600, backgroundColor: '#f7f4f1', borderRadius: 4, display: 'inline-block', fontSize: 18 }}>Books Leaderboard</h3>
                <p>Books by rating.</p>
                <div style={{ marginTop: 30 }}>
                    <ol style={{ textAlign: 'center', listStylePosition: 'inside', padding: 0  }}>
                        {reviewsByRating.map(review => (
                            <Link style={{ color: '#362c24' }} to={`/books/${review.id}`}>
                                <Card class="card text-center" key={review.id} style={{ display: 'inline-block', border: 'none', margin: 20, marginTop: 0, backgroundColor: 'transparent', maxWidth: 90, wordBreak: 'break-word', textAlign: 'center', verticalAlign: 'top', maxHeight: 161, marginRight: 30, marginLeft: 30, marginBottom: 20 }}>
                                    <Card.Img src={review.image_url} style={{ height: 140, width: 90, objectFit: 'cover' }} />
                                    <Card.Body style={{ fontSize: 11, textAlign: 'center', marginTop: 10 }}>
                                        <Rate disabled allowHalf defaultValue={review.average_rating} style={{ fontSize: 10 }} />
                                        <Card.Text style={{ marginTop: 5, fontWeight: 600 }}>{review.title}</Card.Text>
                                        <Card.Text style={{ marginTop: -15, fontSize: 10 }}>by {review.author}</Card.Text>
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