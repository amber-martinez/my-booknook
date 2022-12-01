import React, { useState } from 'react'

function Welcome({ setUser }) {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [bio, setBio] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [errors, setErrors] = useState([])
    const [loadingStatus, setLoadingStatus] = useState(false)

    function handleUsernameInput(e) {
        setUsername(e.target.value)
    }

    function handlePasswordInput(e) {
        setPassword(e.target.value)
    }

    function handlePasswordConfirmationInput(e) {
        setPasswordConfirmation(e.target.value)
    }

    function handleBioInput(e) {
        setBio(e.target.value)
    }

    function handleProfilePicInput(e) {
        setProfilePic(e.target.value)
    }


    function handleSignUpSubmit(e) {
        e.preventDefault()
        setLoadingStatus(true)
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
                profile_pic_url: profilePic,
                bio
            }),
        }).then(r => {
            if (r.ok) {
                r.json().then(user => setUser(user));
            } else {
                r.json().then(error => setErrors(error.errors))
            }

        });
    }

    const errorMessages = errors.map(error => (
        <p>{error}</p>
    ))

    return (
        <div id='welcomeContainer'>
            <h3 style={{ paddingTop: 30, textAlign: 'center', color: '#362c24' }}>Sign up</h3>
            <form style={{ margin: 0 }}>
                <input type='text' placeholder='Username' class='signUpFields' onChange={handleUsernameInput}></input>
                <br></br>
                <input type='password' placeholder='Password' class='signUpFields' onChange={handlePasswordInput}></input>
                <br></br>
                <input type='password' placeholder='Confirm password' class='signUpFields' onChange={handlePasswordConfirmationInput}></input>
                <br></br>
                <input type='text' placeholder='Bio' class='signUpBio' onChange={handleBioInput}></input>
                <br></br>
                <p style={{ marginTop: 11, marginBottom: 5 }}>Link a profile photo:</p>
                <input type='text' placeholder='Profile Photo' class='signUpPhoto' onChange={handleProfilePicInput}></input>
                <br></br>
                {loadingStatus ? <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 48 }}></img> : <input type='submit' value='Create account' id='submitSignUp' style={{ color: '#362c24' }} onSubmit={handleSignUpSubmit}></input>}       
                <p>{errorMessages}</p>
            </form>
        </div>
    )

}

export default Welcome;