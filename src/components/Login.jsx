import React from 'react';
import Logo from "../assets/Logo.png";
import Go from "../assets/G.png";
import User from "../assets/user.png";
import Email from "../assets/Email.png";
import icon1 from "../assets/icon1.png";
import Hero from "../assets/Hero.png";
import App from "../assets/apple.png";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className='h-[100vh] flex flex-col sm:flex-row justify-center items-center'>
      <div className='flex-1 h-screen w-full sm:w-1/2 flex flex-col justify-center items-center'>
        <img src={Logo} alt="" className='mb-4' />
        <p className='text-center text-3xl font-sans mb-4'>Sign Up To eatly</p>
        <div className='flex gap-5 justify-center mb-4'>
          <button className='w-25 h-10 bg-[#F5F5F5] flex justify-center items-center rounded-2xl'>
            <img className='w-5 h-5' src={Go} alt="" />
          </button>
          <button className='w-25 h-10 bg-[#F5F5F5] flex justify-center items-center rounded-2xl'>
            <img className='w-5 h-5' src={App} alt="" />
          </button>
        </div>
        <h2 className='text-center text-[#005A6459] mb-4'>OR</h2>
        <div className='flex justify-center items-center gap-1 mb-4 mt-8'>
          <button className=''><img src={User} alt="" /></button>
          <TextField id="standard-basic" label="Full name" variant="standard" />
        </div>
        <div className='flex justify-center items-center gap-1 mt-8'>
          <button className=''><img src={Email} alt="" /></button>
          <TextField id="standard-basic" label="Email" variant="standard" />
        </div>
        <div className='flex justify-center items-center gap-1 mt-8'>
          <button className=''><img src={icon1} alt="" /></button>
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
        </div>
        <div className='flex justify-center items-center gap-1 mt-8'>
          <button>sign up</button>
        </div>
        <h4 className='mt-8'>Already Have An Account? <Link className='text-[#6C5FBC]' to={'/Sigin'} >Log In</Link></h4>
        <div className='flex gap-50 mt-8'>
          <p>Privacy Policy</p>
          <p>Copyright 2022</p>
        </div>
      </div>
      <div className='bg-[#6C5FBC] h-screen w-full sm:w-1/2'>
        <div className='flex justify-center items-center mt-[40px]'>
          <img className='w-[546px]' src={Hero} alt="" />
          
        </div>
<div>
<h2 className='text-white text-[40px] text-center'>Find Foods With Love </h2>
<p className='text-white text-center text-size[14px]'>Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.</p>
</div>
      </div>
    </div>
  );
}

export default Login;
