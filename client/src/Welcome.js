import React from 'react';
import SignUpWelcome from './SignUpWelcome';
import LoggedInWelcome from './LoggedInWelcome';

function Welcome({ setUser, user }) {

    return (
        <div>
            {user ? <LoggedInWelcome user={user}/> : <SignUpWelcome setUser={setUser}/>}
        </div>
    )

}

export default Welcome;