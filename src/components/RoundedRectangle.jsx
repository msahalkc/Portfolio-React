import image from '../assets/photo.webp';
import { useState, useLayoutEffect } from "react";

const RoundedRectangle = () => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    function updateSize() {
      setIsMobile(window.innerWidth < 768); // Set breakpoint according to your mobile screen size
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return (
    <div className={`md:mt-48 mt-14 md:rounded-tr-full md:rounded-br-full bg-[#eee5e0] border shadow-md md:flex-1 md:w-[90vw] ${isMobile ? 'rounded-rectangle-mobile' : 'rounded-rectangle'} md:relative h-[30vh]`} style={{
      border: '1px solid #0a0a0a', /* Border color and width */
    }}>
      <style>
        {`
          .rounded-rectangle::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 0 250px 250px 0;
            background-image: repeating-linear-gradient(0deg, transparent, transparent 70px, #0a0a0a 70px, #0a0a0a 71px),
                              repeating-linear-gradient(90deg, transparent, transparent 70px, #0a0a0a 70px, #0a0a0a 71px);
          }
          .rounded-rectangle-mobile::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 30vh;
            background-image: repeating-linear-gradient(0deg, transparent, transparent 40px, #0a0a0a 40px, #0a0a0a 41px),
                              repeating-linear-gradient(90deg, transparent, transparent 40px, #0a0a0a 40px, #0a0a0a 41px);
          }
        `}
      </style>
      <img src={image} width="270px" alt="" className="absolute bottom-[-7px] md:bottom-0 left-[25%] md:left-[45%] md:right-[45%] object-cover w-[50%] md:w-[270px]" />
    </div>
  );
};

export default RoundedRectangle;
