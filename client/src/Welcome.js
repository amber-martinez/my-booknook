import React from 'react';
import SignUpWelcome from './SignUpWelcome';
import LoggedInWelcome from './LoggedInWelcome';

function Welcome({ setUser, user, userTruthiness }) {

    return (
        <div>
            {userTruthiness ? <LoggedInWelcome user={user}/> : <SignUpWelcome setUser={setUser}/>}
        </div>
    )

}

export default Welcome;