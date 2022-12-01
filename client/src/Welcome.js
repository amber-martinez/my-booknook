import React, { useState } from 'react'

function Welcome() {
    
    const [profilePicURL, setProfilePicURL] = useState()

    function handlePhotoUpload(e) {
        setProfilePicURL(e.target.files[0])
    }

    return (
        <div id='welcomeContainer'>
            <h3 style={{ paddingTop: 30, textAlign: 'center', color: '#362c24' }}>Sign up</h3>
            <form style={{ margin: 0 }}>
                <input type='text' placeholder='Username' class='signUpFields'></input>
                <br></br>
                <input type='password' placeholder='Password' class='signUpFields'></input>
                <br></br>
                <input type='text' placeholder='Bio' class='signUpBio'></input>
                <br></br>
                <p style={{ marginTop: 11, marginBottom: 5 }}>Link a profile photo:</p>
                <input type='text' placeholder='Profile Photo' class='signUpPhoto' onChange={handlePhotoUpload}></input>
                <br></br>
                <input type='submit' value='Create account' id='submitSignUp' style={{ color: '#362c24' }}></input>
            </form>
        </div>
    )

}

export default Welcome;