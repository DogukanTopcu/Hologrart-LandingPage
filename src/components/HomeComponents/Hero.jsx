import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Hero = () => {
  return (
    <div className='hero w-full h-screen max-h-screen flex flex-col justify-center items-center cursor-default'>
        <mark className='txt abril relative z-10 bg-purple-500 w-full text-center text-white font-extrabold 
          xl:-tracking-[30px] lg:-tracking-[25px] md:-tracking-[20px] sm:-tracking-[15px] -tracking-[10px] 
          2xl:text-[250px] xl:text-[200px] lg:text-[180px] md:text-[150px] sm:text-[120px] text-[65px]'>HOLOGRART</mark>
        <a href='https://metaverse.hologrart.com/' target='_blank' rel="noreferrer" className=' text-white sm:text-2xl text-lg cursor-pointer rounded-2xl sm:py-4 sm:px-12 py-2 px-6 border-4 border-purple-700 bg-purple-700/40 hover:bg-white hover:border-white hover:text-black transition-all duration-300'>Try Pre-Alfa <OpenInNewIcon /></a>

    </div>
  )
}

export default Hero