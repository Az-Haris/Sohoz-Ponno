import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router';

const sizes = {
  responsive: 'text-sm sm:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-3',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2 text-base',
  lg: 'px-6 py-3 text-base'
};

const variants = {
  filled: 'bg-secondary text-white hover:bg-secondary/80',
  outlined: 'border border-primary text-primary hover:bg-primary hover:text-white',
  ghost: 'bg-transparent text-primary hover:bg-[#e6f7f5]',
  text: 'bg-transparent text-primary hover:underline'
};

const Button = ({ 
  children, 
  size = 'md', 
  variant = 'filled', 
  to, 
  onClick, 
  className = '', 
  ...props 
}) => {
  const baseStyle = 'transition duration-200 ease-in-out rounded-sm font-[500] inline-flex items-center justify-center cursor-pointer flex items-center gap-2';
  const finalClassName = clsx(baseStyle, sizes[size], variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={finalClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={finalClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
