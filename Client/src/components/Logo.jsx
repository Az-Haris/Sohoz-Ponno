import React from 'react';
import { Link } from 'react-router';
import { assets } from '../assets/assets';

const Logo = () => {
    return (
        <Link to={"/"} className='flex items-center gap-2'>
            <img src={assets.ecoeats_icon} alt="Logo" className='w-8' />
            <p className='text-2xl font-black text-primary'>সহজ পণ্য</p>
        </Link>
    );
};

export default Logo;