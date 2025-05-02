import React from 'react';
import Container from '../Container';
import Button from '../Button';

const CallToAction = () => {
    return (
        <Container className="mt-36 py-16 rounded-xl bg-primary/90 flex flex-col items-center text-white text-center">
            <h2 className='text-3xl font-semibold'>Grow Your Business with SteadFast</h2>
            <p className='text-lg mt-3 mb-10'>Start Your first step with SteadFast</p>
            <Button to={"/register"} size='lg' variant='outlined' className='bg-white'>
                Become a Merchant
            </Button>
        </Container>
    );
};

export default CallToAction;