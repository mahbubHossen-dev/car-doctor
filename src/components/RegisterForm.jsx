'use client'

import registerUser from '@/app/action/registerUser';
import React from 'react';

const RegisterForm = () => {

    const handleRegister =async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const result = await registerUser({name, email, password})
        console.log(result)
    }

    return (
        <form onSubmit={handleRegister} className="form-control">
            <label className="fieldset-label">Name</label>
            <input type="text" name='name' className="input" placeholder="name" />
            <label className="fieldset-label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            <label className="fieldset-label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />
            <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-neutral mt-4">Login</button>
        </form>
    );
};

export default RegisterForm;