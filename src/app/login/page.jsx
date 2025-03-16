import React from 'react';

const loginPage = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form className="form-control">
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default loginPage;