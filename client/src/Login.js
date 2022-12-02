import React, { useState } from 'react'

function Login({ setUser }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [loadingStatus, setLoadingStatus] = useState(false)

    function handleUsernameInput(e) {
        setUsername(e.target.value)
    }

    function handlePasswordInput(e) {
        setPassword(e.target.value)
    }

    function handleLoginSubmit(e) {
        e.preventDefault();
        setLoadingStatus(true)

        fetch('/login', {
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

        <div id='loginContainer'>
            <h3 style={{ paddingTop: 30, textAlign: 'center', color: '#362c24' }}>Welcome back, reader!</h3>
            <p>Don't have an account? Sign up here.</p>
            <form style={{ margin: 0 }} onSubmit={handleLoginSubmit}>
                <input type='text' placeholder='Username' className='signUpFields' onChange={handleUsernameInput}></input>
                <br></br>
                <input type='password' placeholder='Password' className='signUpFields' onChange={handlePasswordInput}></input>
                <br></br>
                {loadingStatus ? <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 48 }}></img> : <input type='submit' value='Log in' id='submitSignUp' style={{ color: '#362c24' }}></input>}     
            </form>
            <br></br>
            <p style={{ padding: 5 }}>{errors}</p>
        </div>
    )
}

export default Login;