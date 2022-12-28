import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ setUser }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(false);

    function handleLoginSubmit(e) {
        e.preventDefault();
        setLoadingStatus(true)

        fetch('/api/login-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            }),
        })
        .then(r => {
            setLoadingStatus(false)
            if (r.ok) {
                r.json().then(data => {
                    setUser(data)
                    window.location.href='/profile'
                })
            } else {
                r.json().then(e => setErrors(e.error))
            }
        })
    }

    return (

        <div style={{ textAlign: 'center', backgroundColor: '#f7f4f1', borderRadius: 10, padding: '10px 30px 10px 30px', border: 'solid 1px #f2efeb', fontSize: 13, width: 400, margin: 'auto', marginTop: 64 }}>
            <h3 style={{ paddingTop: 30, textAlign: 'center', color: '#362c24', fontSize: 18 }}>Welcome back, reader!</h3>
            <p>Don't have an account? Sign up <Link to='/signup' style={{ color: '#362c24', textDecoration: 'underline' }}>here.</Link></p>
            <form style={{ marginTop: -10 }} onSubmit={handleLoginSubmit}>
                <input type='text' placeholder='Username' className='signUpFields' onChange={((e) => setUsername(e.target.value))} style={{ border: '.95px solid #362c24', padding: '5px 6px 5px 6px', borderRadius: 3, width: 170 }}></input>
                <br></br>
                <input type='password' placeholder='Password' className='signUpFields' onChange={((e) => setPassword(e.target.value))} style={{ border: '.95px solid #362c24', padding: '5px 6px 5px 6px', borderRadius: 3, marginBottom: 30, width: 170 }}></input>
                <br></br>
                {loadingStatus ?
                <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 48 }}></img>
                :
                <input type='submit' value='Log in' id='submitSignUp' style={{ borderRadius: 5, border: '.95px solid #362c24', backgroundColor: '#fdfcfa', color: '#362c24', fontSize: 13, padding: '3px 6px 3px 6px'  }}></input>
                } 
            </form>
            <br></br>
            <p style={{ padding: 5 }}>{errors}</p>
        </div>
    )
}

export default Login;