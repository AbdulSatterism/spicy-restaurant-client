import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'
import { useState } from 'react';
import signupImg from "../../assets/others/authentication2.png"
import SocialLogin from '../Shared/Social/SocialLogin/SocialLogin';

const Signup = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const onSubmit = data => {
        setError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        // set user in database
                        fetch('http://localhost:5000/users', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        title: 'User Created Successfully',
                                        showClass: {
                                            popup: 'animate__animated animate__fadeInDown'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOutUp'
                                        }
                                    })

                                    navigate('/')
                                }
                            })

                    }).catch((err) => {
                        setError(err.message)
                    });

            })
            .catch((err) => {
                const errorMessage = err.message;
                setError(errorMessage)
            });

    }

    return (
        <>
            <Helmet>
                <title>Spicy-Restaurant | Sign up</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center  md:w-1/2 lg:text-left">
                        <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                        <img src={signupImg} alt="" />
                    </div>
                    <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>This name  is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" {...register("photoURL", { required: true })} placeholder="photo url" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-600'>photoURL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>This email  is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    // pattern:/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/
                                })}
                                    placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className='text-red-600'>This password  is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-600'>password minimum 6 character</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-600'>password maximum 20 character</span>}
                                <label className="label">
                                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign up" />
                            </div>

                            <p className='text-center mx-auto'><small className='text-red-600'>{error}</small></p>


                            <p className='text-center mx-auto'><small>Have an account? <Link to='/login' className='text-gray-500'>please login</Link> </small></p>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;