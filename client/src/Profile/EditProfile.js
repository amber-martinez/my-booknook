import React, { useState } from 'react';

function EditProfile({ user, setUser }) {

    const [username, setUsername] = useState(user.username);
    const [bio, setBio] = useState(user.bio);
    const [profilePicLink, setProfilePicLink] = useState(user.profile_pic_url);
    const [errors, setErrors] = useState([]);
    const [delAccPopup, setDelAccPopup] = useState(false);

    function onEditProfileSubmit(e) {
        e.preventDefault()

        fetch(`/api/users/${user.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                bio,
                profile_pic_url: profilePicLink,
                password: user.password_digest
            }),
        }).then(r => {
            if (r.ok) {
                r.json().then(user => setUser(user));
                window.location.href='/profile'
            } else {
                r.json().then(error => setErrors(error.errors))
            }
        })
    }

    function onDeleteAccount() {
        fetch(`users/${user.id}`, {
            method: 'DELETE'
        })
        .then(r => {
            if (r.ok) {
                console.log('hi')
                setUser(null)
                window.location.href='/'
            } else {
                console.log('problem')
            }
        })
    }

    return (
        <div style={{ textAlign: 'center' }}>
            {user ?
            delAccPopup ?
            // if user has selected to delete account
                <div style={{ marginTop: 64 }}>
                    <h5 style={{ paddingBottom: 11 }}>Are you sure you want to delete your account?</h5>
                    <button id='actionButton' style={{ marginRight: 10, padding: '2px 11px 2px 11px', marginBottom: 14, fontWeight: 600, fontSize: 17 }} onClick={onDeleteAccount}>Yes, I want to delete my account.</button>
                    <br></br>
                    <button id='actionButton' style={{ padding: '2px 11px 2px 11px' }} onClick={(() => setDelAccPopup(false))}>No, I want to keep it!</button>
                </div>
            :
            // regular edit profile screen
            <div>
                <div style={{ marginTop: 64 }}>
                    <h4 style={{ fontSize: 18, backgroundColor:'#f7f4f1', display: 'inline-block', padding: '4px 6px 4px 6px', borderRadius: 4 }}>Edit Profile</h4>
                </div>
                <div style={{ display: 'inline-block', verticalAlign: 'top', fontSize: 13 }}>
                    <form style={{ display: 'inline-block' }}>
                        <input type='text' placeholder='Username' onChange={((e) => setUsername(e.target.value))} value={username} style={{ border: '.95px solid #362c24', width: 200, padding: 5, borderRadius: 3, marginTop: 10, backgroundColor: 'transparent', color: '#362c24' }}></input>
                        <br></br>
                        <textarea placeholder='Bio' onChange={((e) => setBio(e.target.value))} value={bio} style={{ border: '.95px solid #362c24', width: 200, height: 100, padding: 5, borderRadius: 3, marginTop: 10, backgroundColor: 'transparent', textAlign: 'left', resize: 'none', color: '#362c24'  }}></textarea>
                        <br></br>
                        <input id='signUpInputs' type='text' placeholder='Profile photo' onChange={((e) => setProfilePicLink(e.target.value))} value={profilePicLink}></input>
                        <br></br>
                        <img src={profilePicLink} style={{ height: 120, width: 120, overflow: 'hidden', borderRadius: 100, objectFit: 'cover' }}></img>
                        <br></br>
                    </form>
                    <br></br>
                </div>
                <div>
                    <button id='actionButton' style={{ marginTop: 70 }} onClick={onEditProfileSubmit}>Save</button>
                    <br></br>
                    <button id='actionButton' style={{ marginTop: 30 }} onClick={(() => setDelAccPopup(true))}>Delete account</button>
                    <br></br><br></br>
                    {errors.map(e => <p style={{ marginTop: 20 }}>{e}</p>)}
                </div>
            </div>
            : 
            // loading screen
            <div style={{ textAlign: 'center', marginTop: 245 }}>
                <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 100 }}></img> 
            </div>
            }
        </div>
    )
}

export default EditProfile;