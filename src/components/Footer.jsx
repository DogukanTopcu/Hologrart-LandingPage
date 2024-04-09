import React from 'react';
import HologrartLogo from "../assets/images/purple-whiteLines.svg";

import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigation = useNavigate();
  return (
    <div className='px-10 pt-24 pb-6 text-white'>
      <div className='container max-w-7xl mx-auto flex justify-between lg:flex-row flex-col'>
        
        <div className='w-full flex flex-col justify-center items-center mb-12 lg:mb-0'>
          <button onClick={() => navigation("/")}><img src={HologrartLogo} alt="Logo" className='w-32 h-32 relative z-10' /></button>

          <p className='text-center mt-5'>Hologrart is a startup that aims to bring the art world to the metaverse. We are building a metaverse art gallery where artists can showcase their work and collectors can buy and sell art. Also we are building a platform allows more than one artists to create and sell joint NFTs of their work. Besides that, we are building a application which name is virtual fit for fashion design and we have an idea named mobability for smart cars about digital twin.</p>
        </div>

        <div className='w-full flex flex-col px-10 items-center mb-12 lg:mb-0'>
          <h3 className='text-3xl font-bold anton mb-10'>Our Projects</h3>
          <ul className='flex flex-col items-center gap-6 text-2xl'>
            <li className='cursor-pointer'><button onClick={() => {
                const y = document.getElementById("metaverse").offsetTop - 40;
                window.scrollTo(0, y);
            }}>Metaverse</button></li>
            <li className='cursor-pointer'><button onClick={() => {
                const y = document.getElementById("jnft").offsetTop - 40;
                window.scrollTo(0, y);
            }}>JNFT</button></li>
            <li className='cursor-pointer'><button onClick={() => {
                const y = document.getElementById("virtualfit").offsetTop - 40;
                window.scrollTo(0, y);
            }}>Virtual Fit</button></li>
            <li className='cursor-pointer'><button onClick={() => {
                const y = document.getElementById("mobability").offsetTop - 40;
                window.scrollTo(0, y);
            }}>Mobability</button></li>
          </ul>
        </div>

        <div className='w-full flex flex-col px-10 items-center'>
          <h3 className='text-3xl font-bold anton mb-10'>FOLLOW US</h3>
          <ul className='gap-6 text-2xl flex flex-col items-center'>
            <li className='cursor-pointer'><a href='https://x.com/hologrart?s=11&t=BDdWMiIwolq5Bo20F_3cVg' target='_blank'>Twitter</a></li>
            <li className='cursor-pointer'><a href='https://www.linkedin.com/company/hologrart' target='_blank'>Linkedin</a></li>
            <li className='cursor-pointer'><a href='https://discord.gg/eJMsGzMNXZ' target='_blank'>Discord</a></li>
          </ul>
        </div>
      </div>


      <div className='container max-w-7xl mx-auto flex justify-center mt-16'>
        <p>All rights are reserved © 2023 Hologrart</p>
      </div>
    </div>
  )
}

export default Footer