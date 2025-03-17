'use client'
import React from 'react';
import { signIn } from "next-auth/react"
// import loginUser from '@/app/action/loginUser';


const LoginForm = () => {

    const handleLogin =async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        // const result = await registerUser({name, email, password})
        // await loginUser({email,password})
        // await signIn('credentials', {email, password})
        // console.log({email, password})
    }

    return (
        <form onSubmit={handleLogin} className="form-control">
            <label className="fieldset-label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            <label className="fieldset-label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />
            <div><a className="link link-hover">Forgot password?</a></div>
            <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </form>
    );
};

export default LoginForm;