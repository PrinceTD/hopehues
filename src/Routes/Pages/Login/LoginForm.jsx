import React, { useContext, useEffect } from 'react'
import img from '../../../assets/Profile/2.jpg'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../provider/AuthProvider';
import { Result } from 'postcss';
import { Link } from 'react-router-dom';

function LoginForm() {

    // const { signIn } = useContext(AuthContext)

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // signIn(email, password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //     })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    {/* <div className="text-center py-6">
                        <img src={img}></img>
                    </div> */}
                    <div className="card p-4 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-xl font-bold">Login now!</h1>
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary text-white" type='submit' value='login' />
                            </div>
                        </form>
                        <p>
                            <small>
                                New Here? <Link to='/signup'>
                                    Create an account
                                </Link>
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm