import React from 'react';
import image from '../assets/photo.png';

const RoundedRectangle = () => {
  return (
    <div className="rounded-rectangle">
      <img src={image} width='400px' alt="" className='mainImage' />
    </div>
  );
}

export default RoundedRectangle;
