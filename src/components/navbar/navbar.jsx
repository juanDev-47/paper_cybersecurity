import React, { useState } from 'react';
import NavLinks from './navlinks';
import Logo from '../../images/Logo.png';
import Toggle from '../toggle';
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className='flex items-center font-medium justify-around bg-main text-cyan-50'>
        <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
          <img
            src={Logo}
            alt='logo del equipo Workbots'
            className='md:cursor-pointer h-9'
          />
          <div className='text-5xl md:hidden' onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
          </div>
        </div>
        <ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins]'>
          <li>
            <a href='/' rel='noreferrer' className='py-7 px-3 inline-block'>
              Home
            </a>
          </li>
          <NavLinks />
        </ul>
        <div className='md:block hidden'>
          <Toggle />
        </div>

        {/* Mobile nav */}
        <ul
          className={`md:hidden bg-main absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${
            open ? 'left-0' : 'left-[-100%]'
          }`}
        >
          <li>
            <a href='\' rel='noreferrer' className='py-7 px-3 inline-block'>
              Home
            </a>
          </li>
          <NavLinks />
          <div className='py-5'>
            <Toggle />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
