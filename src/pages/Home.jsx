import React, { useEffect } from 'react';
import Hero from '../components/HomeComponents/Hero';
import Metaverse from '../components/HomeComponents/Metaverse';
import Jnft from '../components/HomeComponents/Jnft';
import VirtualFit from '../components/HomeComponents/VirtualFit';
import Mobability from '../components/HomeComponents/Mobability';
import Dna from '../components/HomeComponents/Dna';
import News from '../components/HomeComponents/News';

const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <Hero />

        <div className='h-0.5 2-full bg-orange-400'></div>

        <div id='metaverse' className='metaverse'>
          <Metaverse />
        </div>

        <div className='h-0.5 2-full bg-orange-400'></div>

        <div id='jnft' className='jnft'>
          <Jnft />
        </div>

        <div className='h-0.5 2-full bg-orange-400'></div>

        {/* <div id='news' className='news'>
          <News />
        </div> */}

        {/* <div className='h-0.5 2-full bg-orange-400'></div>

        <div id='virtualfit' className='virtualfit'>
          <VirtualFit />
        </div>

        <div className='h-0.5 2-full bg-orange-400'></div>

        <div id='mobability' className='mobability'>
          <Mobability />
        </div> */}

        <div id='dna'>
          <Dna />
        </div>
    </div>
  )
}

export default Home