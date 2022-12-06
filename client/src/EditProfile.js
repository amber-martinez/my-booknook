import React, { useState } from 'react';

function EditProfile({ loading, user, setUser }) {

    const [username, setUsername] = useState(user.username)
    const [bio, setBio] = useState(user.bio)
    const [profilePicLink, setProfilePicLink] = useState(user.profile_pic_url)
    const [error, setErrors] = useState([])

    function onUsernameChange(e) {
        setUsername(e.target.value)
    }

    function onBioChange(e) {
        setBio(e.target.value)
    }

    function onProfilePicChange(e) {
        setProfilePicLink(e.target.value)
    }

    function onEditProfileSubmit(e) {
        e.preventDefault()

        fetch(`/users/${user.id}`, {
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

    return (
        <div style={{ textAlign: 'center' }}>
            {user ?
            <div>
                <div style={{ marginTop: 64 }}>
                    <h4 id='editProfileHeader'>Edit Profile</h4>
                </div>
                <div style={{ display: 'inline-block', verticalAlign: 'top', marginRight: 15 }}>
                    <p style={{ textAlign: 'left' }}>Username</p>
                    <br></br>
                    <p style={{ textAlign: 'left' }} >Bio</p>
                    <br></br>
                    <p style={{ textAlign: 'left' }}>Profile Photo</p>
                </div>
                <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
                    <form style={{ display: 'inline-block' }}>
                        <input id='signUpInputs' type='text' onChange={onUsernameChange} value={username}></input>
                        <br></br>
                        <input id='signUpInputs' type='text' onChange={onBioChange} value={bio}></input>
                        <br></br>
                        <input id='signUpInputs' type='text' onChange={onProfilePicChange} value={profilePicLink}></input>
                        <br></br>
                        <img src={profilePicLink} style={{ height: 120, width: 120, overflow: 'hidden', borderRadius: 100, objectFit: 'cover' }}></img>
                        <br></br>
                        <button id='actionButton' style={{ marginTop: 70 }} onClick={onEditProfileSubmit}>Save</button>
                    </form>
                </div>
            </div>
            :
            <div style={{ textAlign: 'center', marginTop: 245 }}>
                <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 100 }}></img> 
            </div>
            }
        </div>
    )
}

export default EditProfile;