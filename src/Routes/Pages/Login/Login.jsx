import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from "react-icons/fc";
import { app } from '../../../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import { signInWithPopup } from 'firebase/auth';
import SocialLogin from './SocialLogin/SocialLogin';


export default function Login() {

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const captchaRef = useRef(null);
  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  })


  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);

        navigate(from, { replace: true }); pd
      })
  }

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value
    if (validateCaptcha(user_captcha_value)) {

    }

    else {
      alert('Captcha Does Not Match');
    }
  }

  return (
    <>
      <Helmet>
        <title>Hope Hues | SignUp</title>
      </Helmet>
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login Now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input type="text" ref={captchaRef} name='captcha' placeholder="type the captcha above" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <input onClick={handleValidateCaptcha} className="btn btn-primary" type="submit" value='Login' />
              </div>
              <p className='text-center'>
                <small>
                  New Here? <Link to='/adminsignup'>Create an account.</Link>
                </small>
              </p>
            </form>
           
            <div>
            <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}