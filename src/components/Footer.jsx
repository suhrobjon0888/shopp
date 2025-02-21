import React from 'react';
import Logo from "../assets/Logo.png";
import Instgram from '../assets/instagram.png';
import ins from '../assets/in.png';
import face from '../assets/face.png';
import twter from '../assets/twter.png';

function Footer() {
  return (
    <div className='bg-[#EAEAEA] flex flex-col items-center justify-center py-10 px-5 md:px-10 lg:px-20'>
      <div className='w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-5'>
        <div className='flex items-center gap-2'>
          <img src={Logo} alt="Logo" className='w-10 h-10' />
          <p className='text-[29px] text-[#6C5FBC] font-bold'>eatly</p>
        </div>
        <div className='flex flex-wrap justify-center md:justify-end gap-5 md:gap-10'>
          <a className='text-[18px] text-[#999999]' href="#">Blog</a>
          <a className='text-[18px] text-[#999999]' href="#">Pricing</a>
          <a className='text-[18px] text-[#999999]' href="#">About Us</a>
          <a className='text-[18px] text-[#999999]' href="#">Contact</a>
        </div>
      </div>
      <div className='w-full max-w-[1200px] border-t border-[#818181] my-6'></div>
      <div className='w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-5'>
        <p className='text-[18px] text-[#999999] text-center md:text-left'>© 2023 EATLY All Rights Reserved.</p>
        <div className='flex gap-5 md:gap-10'>
          <a href="https://www.instagram.com">
            <img src={Instgram} alt="Instagram" className='w-6 h-6' />
          </a>
          <a href="https://www.linkedin.com">
            <img src={ins} alt="LinkedIn" className='w-6 h-6' />
          </a>
          <a href="https://www.facebook.com">
            <img src={face} alt="Facebook" className='w-6 h-6' />
          </a>
          <a href="https://x.com/?lang=en">
            <img src={twter} alt="Twitter" className='w-6 h-6' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;