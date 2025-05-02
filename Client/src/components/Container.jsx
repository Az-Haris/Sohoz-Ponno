import clsx from 'clsx';
import React from 'react';

const Container = ({children, className, ...props}) => {
    return (
        <section className={clsx('max-w-screen-xl mx-auto px-4', className)} {...props}>
            {children}
        </section>
    );
};

export default Container;