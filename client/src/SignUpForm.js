import React, { useState } from 'react';

function SignUpForm({ setUser }) {

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
        fetch('/api/user-signup', {
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
                r.json().then(user => {
                    setLoadingStatus(false)
                    setUser(user)
                    window.location.href='/profile'
                });
            } else {
                r.json().then(error => {
                    console.log(error)
                    setErrors(error.errors)
                    setLoadingStatus(false)
                })
            }

        });
    }

    return (
        <div id='welcomeContainer'>
        <h3 style={{ paddingTop: 30, textAlign: 'center', color: '#362c24' }}>Sign up</h3>
        <form style={{ margin: 0 }}>
            <input type='text' placeholder='Username' className='signUpFields' onChange={handleUsernameInput}></input>
            <br></br>
            <input type='password' placeholder='Password' className='signUpFields' onChange={handlePasswordInput}></input>
            <br></br>
            <input type='password' placeholder='Confirm password' className='signUpFields' onChange={handlePasswordConfirmationInput}></input>
            <br></br>
            <textarea type='paragraph_text' placeholder='Bio' className='signUpBio' onChange={handleBioInput}></textarea>
            <br></br>
            <p style={{ marginTop: 11, marginBottom: 5 }}>Link a profile photo:</p>
            <input type='text' placeholder='Profile Photo' className='signUpPhoto' onChange={handleProfilePicInput} style={{ marginTop: 2 }}></input>
            <br></br>
            {loadingStatus 
            ?
            <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 48 }}></img>
            :
            <button id='submitSignUp' style={{ color: '#362c24' }} onClick={handleSignUpSubmit}>Create account</button>
            }       
            <div style={{ marginTop: 30 }}>
                {errors ? errors.map(e => <p>{e}</p>) : null}
            </div>
        </form>
    </div>
    )
}

export default SignUpForm;