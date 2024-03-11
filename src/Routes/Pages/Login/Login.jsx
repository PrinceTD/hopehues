import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

function Login({ img, titel, subTitel }) {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handelGoogleSIgn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }
    return (
        <>
            <button onClick={handelGoogleSIgn}>
                Go to Google
            </button>
        </>
    )
}

export default Login;