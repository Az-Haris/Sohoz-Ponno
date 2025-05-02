import React from 'react';
import { assets } from '../../assets/assets';
import Container from '../Container';

const Services = () => {
    return (
        <Container className='mt-36'>
            <h2 className='text-center text-3xl mb-12 font-semibold'>Our Services</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <img src={assets.delivery} alt="" />
                    <p className='text-xl'>Ecommerce Delivery</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <img src={assets.pickndrop} alt="" />
                    <p className='text-xl'>Pick and Drop</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <img src={assets.packaging} alt="" />
                    <p className='text-xl'>Packging</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <img src={assets.warehouse} alt="" />
                    <p className='text-xl'>Warehousing</p>
                </div>
            </div>
        </Container>
    );
};

export default Services;