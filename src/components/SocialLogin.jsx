'use client'

import { signIn } from 'next-auth/react';
import React from 'react';
import toast from 'react-hot-toast';

const SocialLogin = () => {

    const handleSocial = async (providerName) => {
        console.log(providerName)
        toast('Waiting')
        await signIn(providerName)
        
        console.log(result)
    }

    return (
        <div className="space-x-2 mt-3 mx-auto text-center">
            <button onClick={() => handleSocial('google')} className="btn">Google</button>
            <button onClick={() => handleSocial('github')} className="btn">Github</button>
        </div>
    );
};

export default SocialLogin;