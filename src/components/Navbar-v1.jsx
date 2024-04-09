import React, { useState, useEffect } from 'react';
import HologrartLogo from "../assets/images/purple-whiteLines.svg";
import Hologrart from "../assets/images/hologrartMetaverse.svg";

import MenuIcon from '@mui/icons-material/Menu';

import { useNavigate } from 'react-router-dom';


const SubNav = ({ isOpen, setIsOpen }) => {
    const [translate, setTranslate] = useState("-translate-y-[100%]");
    useEffect(() => {
        if (isOpen) {
            setTranslate("-translate-y-[0%]");
        }
        else {
            setTranslate("-translate-y-[100%]");
        }
    }, [isOpen])

    return (
        <div className={`sm:px-8 px-2 bg-black py-2 ${translate} relative z-0 transition-all duration-300 ease-linear`}>
            <a target='_blank' rel="noreferrer" href="https://collection.hologrart.com/"><div className='mb-2 cursor-pointer text-black py-2 px-4 border-2 hover:bg-white/10 rounded-xl transition duration-300 text-white'>Genesis</div></a>
            <h3 onClick={() => {
                const y = document.getElementById("metaverse").offsetTop - 40;
                window.scrollTo(0,y); 
                setIsOpen(false);
            }} className='mb-2 cursor-pointer text-black py-2 px-4 border-2 hover:bg-white/10 rounded-xl transition duration-300 text-white'>Metaverse</h3>
            <h3 onClick={() => {
                const y = document.getElementById("jnft").offsetTop - 40;
                window.scrollTo(0,y); 
                setIsOpen(false);
            }} className='mb-2 cursor-pointer text-black py-2 px-4 border-2 hover:bg-white/10 rounded-xl transition duration-300 text-white'>Joint NFT Generation</h3>
            
            <a target='_blank' rel="noreferrer" href="https://virtualfit.hologrart.com/"><div className='mb-2 cursor-pointer text-black py-2 px-4 border-2 hover:bg-white/10 rounded-xl transition duration-300 text-white'>Virtual Fit</div></a>
            <a target='_blank' rel="noreferrer" href="https://mobability.hologrart.com/"><div className='mb-2 cursor-pointer text-black py-2 px-4 border-2 hover:bg-white/10 rounded-xl transition duration-300 text-white'>Mobability</div></a>

            <h3 onClick={() => {
                const y = document.getElementById("dna").offsetTop - 40;
                window.scrollTo(0,y); 
                setIsOpen(false);
            }} className='mb-2 cursor-pointer text-black py-2 px-4 border-2 hover:bg-white/10 rounded-xl transition duration-300 text-white'>Our DNA</h3>
        </div>
        
    )
}

const Navbar1 = () => {
    const navigation = useNavigate();

    const [hamburger, setHamburger] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const x = window.innerWidth;

    useEffect(() => {        
        if (x <= 880) {
            setHamburger(true);
        }
        else {
            setHamburger(false);
        }
    }, [x]);

  return (
    <div className='fixed top-0 w-screen z-50'>
    <div className='navbar bg-black px-5 py-2 shadow-2xl shadow-white/10 relative z-50'>
        <div className='container max-w-7xl mx-auto flex justify-between items-center'>
            
            <button onClick={() => navigation("/")} className='flex justify-start'>
                <div className='w-24 h-24 rounded-full bg-purple-700 blur-2xl absolute sm:-mt-12 -mt-20 z-0 -ml-7' />
                <div className='flex items-center justify-center'>
                    <img src={HologrartLogo} alt="Logo" srcset="" className='md:w-12 md:h-16 w-6 h-6 relative z-10' />
                    <img src={Hologrart} alt="logo" srcset="" className='pointer-events-none lg:w-60 md:w-52 w-24 sm:block hidden md:ml-4 ml-2' />
                </div>
            </button>
            

            {
                !hamburger ? (
                    <div>
                        <ul className='flex justify-between lg:text-[16px] text-[12px] items-center sm:gap-5 gap-3 text-white'>
                            <li className='cursor-pointer'><a target='_blank' rel="noreferrer" href="https://collection.hologrart.com/">Genesis</a></li>
                            <li className='cursor-pointer'><button onClick={() => {
                                const y = document.getElementById("metaverse").offsetTop - 40;
                                window.scrollTo(0, y);
                            }}>Metaverse</button></li>
                            <li className='cursor-pointer'><button onClick={() => {
                                const y = document.getElementById("jnft").offsetTop - 40;
                                window.scrollTo(0, y);
                            }}>JNFT</button></li>
        
                            <li className='cursor-pointer'><a target='_blank' rel="noreferrer" href="https://virtualfit.hologrart.com/">Virtual Fit</a></li>
                            <li className='cursor-pointer'><a target='_blank' rel="noreferrer" href="https://mobability.hologrart.com/">Mobability</a></li>
                        
                            <li className='cursor-pointer'><button onClick={() => {
                                const y = document.getElementById("dna").offsetTop - 40;
                                window.scrollTo(0, y);
                            }}>Our DNA</button></li>
        
                            <div className='text-white flex justify-center items-center'>
                                <a href='https://metaverse.hologrart.com/' target='_blank' rel="noreferrer" className='md:block hidden rounded-2xl cursor-pointer py-3 px-5 border-4 border-purple-700 hover:bg-purple-700/40 transition-all duration-300'>Try Pre-Alfa</a>
                            </div>
                        
                        </ul>
                    </div>
                ) :
                (
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <MenuIcon sx={{ color: "white" }} />
                    </button>
                )
            }

            
        </div>
    </div>
    {
        hamburger ? (<SubNav isOpen={isOpen} setIsOpen={setIsOpen} />) : null
    }
    </div>
  )
}

export default Navbar1