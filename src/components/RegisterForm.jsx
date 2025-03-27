'use client'
import { signIn } from "next-auth/react";
import registerUser from '@/app/action/registerUser';
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import SocialLogin from "./SocialLogin";


const RegisterForm = () => {
    const router = useRouter()
    const handleRegister = async (e) => {

        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const result = await registerUser({ name, email, password })
        toast('Creating ...')
        if (result.insertedId) {
            const result = await signIn('credentials', { email, password, redirect: false });
            if (result.ok) {
                toast.success('Register Success!')
                router.push('/')
            }
        }
        // await signIn('credentials', { email, password, redirect: false});
        console.log(result)
    }

    return (
        <div>
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

            <div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default RegisterForm;