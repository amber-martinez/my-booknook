import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function UserBox({ user, setUser }) {
    const [showSettings, setShowSettings] = useState(false);
    const [quote, setQuote] = useState([]);

    useEffect(() => {
        fetch('https://api.quotable.io/random')
        .then(r => r.json())
        .then(quote => setQuote(quote))
    }, [])

    useEffect(() => {
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
    }, [showSettings])

    function handleLogoutClick() {
        fetch('/api/logout', {
          method: 'DELETE'
        })
        .then(r => {
          if (r.ok) {
            window.location.href='/'
            setUser(null)
          }
        })
    }

    return (
        <div style={{ backgroundColor: '#f7f4f1', padding: 30, borderRadius: 10, textAlign: 'center', display: 'inline-block' }}>
            <Card id='profileCard' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user.profile_pic_url} style={{ borderRadius: 300, height: 200, width: 200, objectFit: 'cover', margin: 'auto', border: 'solid 1px white' }}/>
            <Card.Body style={{ marginTop: 17 }}>
                <Card.Title style={{ fontSize: 18 }}>{user.username}</Card.Title>
                <Card.Text style={{ fontSize: 14, marginTop: -3 }}>
                {user.bio}
                </Card.Text>
            </Card.Body>
            {showSettings ?
            <div>
            <button onClick={(() => setShowSettings(!showSettings))} style={{ fontSize: 14, marginTop: 9, backgroundColor: 'transparent', border: 'none' }}><img src='https://i.imgur.com/NVIZzfu.png' alt='settings' style={{ height: 25 }}></img></button><br></br>
            <div style={{ fontSize: 13, marginTop: 10 }} class='hidden' id='slideDown'>
                <button style={{ width: 100, padding:'3px 0px 3px 0px', textAlign: 'center', margin: 5, border: 'transparent', backgroundColor: '#e9e5dcdf', borderRadius: 4 }}><Link to='/edit-profile' style={{ width: 100, color: '#362c24' }}>Edit profile</Link></button><br></br>
                <button style={{ width: 100, padding:'3px 0px 3px 0px', textAlign: 'center', margin: 5, border: 'transparent', backgroundColor: '#e9e5dcdf', borderRadius: 5, color: '#362c24' }}><Link to='/new-review' style={{ color: '#362c24' }}>Create review</Link></button><br></br>
                <button style={{ width: 100, padding:'3px 0px 3px 0px', textAlign: 'center', margin: 5, border: 'transparent', backgroundColor: '#e9e5dcdf', borderRadius: 5, color: '#362c24' }}><Link to='/add-book' style={{ color: '#362c24' }}>Add a Book</Link></button><br></br>
                <button style={{ width: 100, padding:'3px 0px 3px 0px', textAlign: 'center', margin: 5, border: 'transparent', backgroundColor: '#e9e5dcdf', borderRadius: 5, color: '#362c24' }} onClick={handleLogoutClick}>Log out</button>
            </div>
            </div>
            : 
            <div>
                <button onClick={(() => setShowSettings(!showSettings))} style={{ fontSize: 14, marginTop: 9, backgroundColor: 'transparent', border: 'none' }}><img src='https://i.imgur.com/NVIZzfu.png' alt='settings' style={{ height: 25 }}></img></button>
            </div>
            }
            <div style={{ margin: '29px 0px 0px 0px' }}>
                {quote ? <p style={{ fontSize: 14 }}>{quote.content} – {quote.author}</p> : null}
            </div>
            </Card>
        </div>
    )
}

export default UserBox;