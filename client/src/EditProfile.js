import React, { useState } from 'react';

function EditProfile({ loading, user }) {

    const [username, setUsername] = useState(user.username)
    const [bio, setBio] = useState(user.bio)
    const [profilePicLink, setProfilePicLink] = useState(user.profile_pic_url)

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
                        <input id='signUpInputs' type='text' value={username}></input>
                        <br></br>
                        <input id='signUpInputs' type='text' value={bio}></input>
                        <br></br>
                        <input id='signUpInputs' type='text' value={profilePicLink}></input>
                        <br></br>
                        <img src={profilePicLink} style={{ height: 120, overflow: 'hidden', borderRadius: 100, objectFit: 'cover' }}></img>
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