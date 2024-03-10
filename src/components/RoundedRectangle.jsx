import React from 'react';
import image from '../assets/photo.webp';

const RoundedRectangle = () => {
  return (
    <div className="rounded-rectangle">
      <img src={image} width='300px' alt="" className='mainImage' />
    </div>
  );
}

export default RoundedRectangle;
