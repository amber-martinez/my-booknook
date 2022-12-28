import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function LoggedInWelcome({ user }) {
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user == null) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [user])
    
    return (
        <div style={{ textAlign: 'center', backgroundColor: '#f7f4f1', borderRadius: 10, padding: '30px 30px 30px 30px', border: 'solid 1px #f2efebee' }}>
            {loading ?
            null
            :
            <div>
                <h3 style={{ color: '#362c24', fontSize: 18 }}>Howdy, {user.username}</h3>
                <p style={{ fontSize: 13 }}>Read anything new lately?</p>
                <button style={{ marginLeft: 15, borderRadius: 5, border: '1px solid rgba(136, 117, 102, 0.195)', backgroundColor: '#fdfcfa', color: '#6f5b4b', fontSize: 13, padding: '3px 2px 3px 2px'  }}><Link to='/add-book' id='linkButton'>Add a book</Link></button>
                <button style={{ marginLeft: 15, borderRadius: 5, border: '1px solid rgba(136, 117, 102, 0.195)', backgroundColor: '#fdfcfa', color: '#6f5b4b', fontSize: 13, padding: '3px 2px 3px 2px'  }}><Link to='/new-review' id='linkButton'>Write a review</Link></button>
            </div>
            }
        </div>
    )
}

export default LoggedInWelcome;