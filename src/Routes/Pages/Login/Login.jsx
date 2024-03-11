import React from 'react'
import { getAuth } from 'firebase/auth'

function Login({ img, titel, subTitel }) {
    const auth = getAuth(app)
    return (
        <>
            <button>
                Go to Google
            </button>
        </>
    )
}

export default Login;