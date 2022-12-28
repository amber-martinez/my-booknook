import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from 'axios';

function SignUpForm({ setUser }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [bio, setBio] = useState('')
    const [profilePic, setProfilePic] = useState('https://i.imgur.com/oEKQ6tn.png')
    const [errors, setErrors] = useState([])
    const [loadingStatus, setLoadingStatus] = useState(false)

    function photoUploadHandler(e) {
        const formData = new FormData()
        formData.append('file', e.target.files[0])
        formData.append('upload_preset', 'hf6x2oay ')

        Axios.post('https://api.cloudinary.com/v1_1/amber-martinez-cloud/image/upload', formData)
        .then(r => {
            setProfilePic(r.data.secure_url)
        });
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
        <div style={{ fontSize: 13, backgroundColor: '#f7f4f1', borderRadius: 10, padding: 10, marginLeft: 0, border: 'solid 1px #f2efeb', textAlign: 'center' }}>
            <h3 style={{ textAlign: 'center', color: '#362c24', fontSize: 18, marginTop: 20 }}>Sign up</h3>
            <form style={{ marginTop: 0 }}>
                <Row>
                    <Col style={{ textAlign: 'right', rightMargin: 5 }}>
                        <input type='text' placeholder='Username' onChange={((e) => setUsername(e.target.value))} style={{ border: '.95px solid #362c24', width: 150, padding: 5, borderRadius: 3, marginTop: 10 }}></input>
                        <br></br>
                        <input type='password' placeholder='Password' onChange={((e) => setPassword(e.target.value))} style={{ border: '.95px solid #362c24', width: 150, padding: 5, borderRadius: 3, marginTop: 10 }}></input>
                        <br></br>
                        <input type='password' placeholder='Confirm password' onChange={((e) => setPasswordConfirmation(e.target.value))} style={{ border: '.95px solid #362c24', width: 150, padding: 5, borderRadius: 3, marginTop: 10 }}></input>
                        <br></br>
                    </Col>
                    <Col style={{ textAlign: 'left', leftMargin: 5 }}>
                        <textarea type='paragraph_text' placeholder='Bio' onChange={((e) => setBio(e.target.value))} style={{ border: '.95px solid #362c24', width: 150, resize: 'none', padding: 6, borderRadius: 3, marginTop: 10 }}></textarea>
                        <p style={{ marginTop: 5, marginBottom: 5, fontSize: 13 }}>Profile photo:</p>
                        <input type='file' placeholder='Profile Photo' className='signUpPhoto' onChange={photoUploadHandler} style={{ marginTop: 2, fontSize: 11, width: '90%', color: '#362c24' }}></input>
                        <br></br>
                    </Col>
                </Row>
                <img style={{ width: 70, height: 70, borderRadius: 50, objectFit: 'cover', marginTop: 20, border: 'solid 1px white' }} src={profilePic}></img>
                <br></br>
                {loadingStatus 
                ?
                <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 48 }}></img>
                :
                <button style={{ borderRadius: 5, border: '1px solid rgba(136, 117, 102, 0.195)', backgroundColor: '#fdfcfa', color: '#6f5b4b', fontSize: 13, padding: '3px 6px 3px 6px', marginTop: 20  }} onClick={handleSignUpSubmit}>Create account</button>
                }       
                <div style={{ marginTop: 30 }}>
                    {errors ? errors.map(e => <p>{e}</p>) : null}
                </div>
            </form>
    </div>
    )
}

export default SignUpForm;