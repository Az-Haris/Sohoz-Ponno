import React from 'react';
import { Link } from 'react-router';
import { assets } from '../assets/assets';

const Logo = () => {
    return (
        <Link to={"/"} className='flex items-end gap-2'>
            <img src={assets.sohozponno_logo} alt="Logo" className='w-12' />
            <p className='text-2xl font-black text-primary'>সহজ পণ্য</p>
        </Link>
    );
};

export default Logo;