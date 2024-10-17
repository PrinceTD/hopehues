import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Result } from 'postcss';
import useAuth from '../../../../Hooks/useAuth';


export default function SocialLogin() {
    const { googleSignIn } = useAuth();

    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
    }
    return (
        <div className='p-4 text-center'>
            <div className="divider">or</div>
            <button onClick={handelGoogleSignIn} className="btn">
                <FaGoogle></FaGoogle>
                Google
            </button>    </div>
    )
}
