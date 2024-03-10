import React from 'react';
import image from '../assets/photo.webp';
import FixMyInternet from '../assets/fix my internet.png'
import GiveMeABreak from '../assets/give me a break.png'
import FeatureBug from '../assets/feature bug.webp'
import WebDesigner from '../assets/web designer.png'

const RoundedRectangle = () => {
  return (
    <div className="rounded-rectangle">
      <img src={image} width='400px' alt="" className='mainImage' />
      {/* <img src={FixMyInternet} alt="" width='150px' className='sticker FixMyInternet'/>
      <img src={GiveMeABreak} alt="" width='150px' className='sticker GiveMeABreak'/>
      <img src={FeatureBug} alt="" width='150px' className='sticker FeatureBug'/>
      <img src={WebDesigner} alt="" width='150px' className='sticker WebDesigner'/> */}
    </div>
  );
}

export default RoundedRectangle;
