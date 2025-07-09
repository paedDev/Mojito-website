import React from 'react';
import navLinks from '../../constants';
navLinks;
const Navbar = () => {
  return (
    <nav className='z-50 w-full'>
      <div className='flex md:flex-row flex-col items-center md:justify-between gap-5 py-5 lg:px-0 px-5 container mx-auto'>
        <a href="#home" className='flex items-center gap-2 '>
          <img src="/images/logo.png" alt="" />
          <p className='font-modern-negra text-3xl -mb-2'>Velvet Pour</p>
        </a>

        <ul className='flex-center lg:gap-12 gap-7'>
          {
            navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className='cursor-pointer text-nowrap md:text-base text-sm'>{link.title}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;