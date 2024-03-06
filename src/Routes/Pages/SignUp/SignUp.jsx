import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../provider/AuthProvider';



function SignUp() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // const { Createuser } = useContext(AuthContext);


    const onSubmit = data => {
        console.log(data)
        // Createuser(data.email, data.password)
        //     .then(result => {
        //         const loggedUser = result.user;
        //         console.log(loggedUser)
        //     })
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card p-4 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-xl font-bold">SignUp now!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600 text-xs'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600 text-xs'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6 })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password && <span className='text-red-600 text-xs'>Password must be 6 characters</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary text-white" type='submit' value='Sign Up' />
                            </div>
                        </form>
                        <p>
                            <small>
                                New Here? <Link to='/login'>
                                    Already Create
                                </Link>
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp