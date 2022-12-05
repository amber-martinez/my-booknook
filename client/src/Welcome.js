import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import LoggedInWelcome from './LoggedInWelcome';

function Welcome({ setUser, user }) {

    return (
        <div>
            {user ? <LoggedInWelcome user={user}/> : <SignUpForm setUser={setUser}/>}
        </div>
    )

}

export default Welcome;