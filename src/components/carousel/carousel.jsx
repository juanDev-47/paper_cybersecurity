import React from 'react';
import { Carousel } from 'flowbite-react';
import img1 from '../../images/entities/img1.jpg';
import img2 from '../../images/entities/img2.jpg';
import img3 from '../../images/entities/img3.jpg';
import img4 from '../../images/entities/img4.jpg';
import img5 from '../../images/entities/img5.jpg';

const CarouselNav = () => {
  return (
    <div className='h-56 sm:h-64 xl:h-[600px]'>
      <Carousel>
        <img
          src={img1}
          alt='...'
        />
        <img
          src={img2}
          alt='...'
        />
        <img
          src={img3}
          alt='...'
        />
        <img
          src={img4}
          alt='...'
        />
        <img
          src={img5}
          alt='...'
        />
      </Carousel>
    </div>
  );
};

export default CarouselNav;
