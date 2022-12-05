import React from 'react'

function Leaderboard({ reviewsByRating, loading }) {

    // console.log(reviewsByRating.flatMap(review => console.log(review.title)))

    console.log(loading)

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
                    {reviewsByRating.sort((a, b) => b.avg_rating - a.avg_rating).map(review => (
                        <div key={review.id}>
                            <div style={{ display: 'inline-block', verticalAlign: 'top', marginBottom: 15 }}>
                                <img src={review.image_url} style={{ height: 120, width: 80, objectFit: 'cover' }}></img>
                            </div>
                            <div style={{ marginBottom: 15, display: 'inline-block' }}>
                            <div style={{ display: 'inline-block', paddingLeft: 10, verticalAlign: 'top' }}>
                                <h6 style={{ fontWeight: 600, color: '#362c24' }} id='bookTitle'>{review.title}</h6>
                                <p>{review.avg_rating}/5</p>
                                <button id='actionButton' style={{ fontSize: 14 }}>Read Reviews</button>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            }
        </div>
    )
}

export default Leaderboard;