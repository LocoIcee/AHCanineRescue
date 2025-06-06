import React from 'react';

export const Logo = ({ className }) => {
  return (
    <div className={`${className} overflow-hidden rounded-full bg-white shadow-md relative`}>
      <img 
        src={`${import.meta.env.BASE_URL}assets/images/logo-black.jpg`} 
        alt="Almost Home Canine Rescue Logo" 
        className="absolute inset-0 w-full h-full object-cover transform-gpu"
        style={{ objectPosition: 'center' }}
      />
    </div>
  );
};
