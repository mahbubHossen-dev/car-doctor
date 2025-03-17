'use client'
import React from 'react';
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

const LoginForm = () => {
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await signIn('credentials', { email, password, redirect: false});
            console.log(result)
            router.push('/');
            // if (result?.error) {
            //     console.log("Login failed:", result.error);
            // } else {
            //     router.push('/'); // সফল হলে হোমপেজে পাঠাবে
            // }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleLogin} className="form-control">
            <label className="fieldset-label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" required />
            <label className="fieldset-label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" required />
            <div><a className="link link-hover">Forgot password?</a></div>
            <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </form>
    );
};

export default LoginForm;
