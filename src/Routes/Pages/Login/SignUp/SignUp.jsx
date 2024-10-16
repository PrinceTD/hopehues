import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../provider/AuthProvider';
import { Link } from 'react-router-dom';




function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { createuser } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createuser(data.email, data.password)
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser)
                
            })
    };



    return (
        <>
            <Helmet>
                <title>Hope Hues | SignUp</title>
            </Helmet>
            <div className="hero bg-base-100 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp Now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" {...register("name")} placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password")} placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value='Sign Up' />
                            </div>
                            <p className='text-center'>
                                <small>
                                    Already have an account? <Link to='/adminlogin'>Please Login.</Link>
                                </small>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp