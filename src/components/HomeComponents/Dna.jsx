import React from 'react';

import Berkay from "../../assets/images/berkay.jpg"
import Doguk from "../../assets/images/doguk.jpg";
import Mali from "../../assets/images/mali.jpg";
import Elif from "../../assets/images/elif.jpeg";
import Didem from "../../assets/images/didem.jpeg";
import Emre from "../../assets/images/emre.jpg";

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

import { AiFillBehanceCircle } from "react-icons/ai";

const Dna = () => {
  return (
    <div className='container max-w-7xl mx-auto text-white py-16 lg:px-0 px-3'>
        <h1 className='anton text-4xl sm:text-6xl'>OUR DNA:</h1>
        <h1 className='anton text-4xl sm:text-6xl text-blue-600/40'>BRAIN TEAM</h1>
        
        <div className='grid gap-10 md:grid-cols-2 grid-cols-1 mt-20'>
          <div className='grid gap-10 grid-cols-5'>
              <img className='col-span-2 w-full rounded-full' src={Berkay} alt="berkay gülbeyaz" srcset="" />
              <div className='col-span-3'>
                <h3 className='text-3xl anton'>BERKAY GÜLBEYAZ</h3>
                <h3 className='text-3xl text-red-600/40 anton'>CHIEF EXECUTIVE OFFICER</h3>

                <ul className='text-sm mt-3'>
                  <li>Founder, Strategic Management</li>
                  <li>Web3 Influencer</li>
                  <li>Undergraduate Student at İzmir Bakırçay University</li>
                  <li>Management Information Systems</li>
                  <li>Entrepreneur at BTM, İzmir Teknopark, Yıldız Teknopark</li>
                </ul>

                <div className='mt-2 flex'>
                  {/* <TwitterIcon className='cursor-pointer mr-1' /> */}
                  <a href="https://www.linkedin.com/in/berkay-g%C3%BClbeyaz/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className='cursor-pointer' /></a>
                </div>
              </div>
          </div>

          <div className='grid gap-10 grid-cols-5'>
              <img className='col-span-2 w-full rounded-full' src={Doguk} alt="doğukan topçu" srcset="" />
              <div className='col-span-3'>
                <h3 className='text-3xl anton'>DOĞUKAN TOPÇU</h3>
                <h3 className='text-3xl text-blue-600/40 anton'>CHIEF TECHNOLOGY OFFICER</h3>
                <ul className='text-sm mt-3'>
                  <li>Co-Founder</li>
                  <li>Web Developer, Game Developer</li>
                  <li>Undergraduate Student at İzmir Institute of Technology</li>
                  <li>Computer Engineering department</li>
                  <li>Entrepreneur at BTM, İzmir Teknopark, Yıldız Teknopark</li>
                </ul>

                <div className='mt-2 flex'>
                  <a href="https://www.linkedin.com/in/do%C4%9Fukan-top%C3%A7u-367b24220/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className='cursor-pointer mr-1' /></a>
                  <a href="https://github.com/DogukanTopcu" target="_blank" rel="noopener noreferrer"><GitHubIcon className='cursor-pointer' /></a>
                </div>
              </div>
          </div>

          <div className='grid gap-10 grid-cols-5'>
              <img className='col-span-2 w-full rounded-full' src={Elif} alt="menice sude görbaş" srcset="" />
              <div className='col-span-3'>
                <h3 className='text-3xl anton'>Elifnur Akdolan</h3>
                <h3 className='text-3xl text-yellow-600/40 anton'>DESIGNER</h3>

                <ul className='text-sm mt-3'>
                  <li>3D Designer</li>
                  <li>UI/UX Designer</li>
                  <li>Bacherlor’s Degree at Yasar University</li>
                  <li>Industrial Design</li>
                  <li>Rendering and Animation</li>
                </ul>

                <div className='mt-2 flex'>
                  <a href="https://www.behance.net/elifnurakdolan" target="_blank" rel="noopener noreferrer" className='flex justify-center items-center p-0.5 ml-0.5'><AiFillBehanceCircle fontSize={24} /></a>
                  <a href="https://www.linkedin.com/in/elifnur-akdolan-268339208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"><LinkedInIcon className='cursor-pointer' /></a>
                  <a href="https://instagram.com/elifakdolan?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                </div>
              </div>
          </div>

          <div className='grid gap-10 grid-cols-5'>
              <img className='col-span-2 w-full rounded-full' src={Didem} alt="didem öksel" srcset="" />
              <div className='col-span-3'>
                <h3 className='text-3xl anton'>DİDEM ÖKSEL</h3>
                <h3 className='text-3xl text-green-600/40 anton'>FASHION DESIGNER</h3>

                <ul className='text-sm mt-3'>
                  <li>Fashion Designer/ Digital Fashion</li>
                  <li>Freelancer 3d designer</li>
                  <li>Bachelor's Degree Anadolu University Fashion Design</li>
                  <li>Hologrart metaverse</li>
                  <li>Longstage metaverse</li>
                </ul>

                <div className='mt-2 flex'>
                  <a href="https://twitter.com/3ddidem49838?t=-xtKmr1arnOqDbkDD0jRfA&s=09" target="_blank" rel="noopener noreferrer"><TwitterIcon className='cursor-pointer mr-1' /></a>
                  <a href="https://www.linkedin.com/in/didemoksel/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className='cursor-pointer' /></a>
                  <a href="https://www.behance.net/didemoksel" target="_blank" rel="noopener noreferrer" className='flex justify-center items-center p-0.5 ml-0.5'><AiFillBehanceCircle fontSize={24} /></a>
                  <a href="https://instagram.com/3designerdidem?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                </div>
              </div>
          </div>

          <div className='grid gap-10 grid-cols-5'>
              <img className='col-span-2 w-full rounded-full' src={Mali} alt="emre yıldız" srcset="" />
              <div className='col-span-3'>
                <h3 className='text-3xl anton'>Muhammet Ali Tural</h3>
                <h3 className='text-3xl text-purple-600/40 anton'>DEVELOPER</h3>

                <ul className='text-sm mt-3'>
                  <li>Game Developer</li>
                  <li>Unity C# Developer</li>
                  <li>Bachelor's Degree at Uludag University</li>
                  <li>Computer Engineering Departmant</li>
                  <li>Hologrart Metaverse, Liya Games</li>
                </ul>

                <div className='mt-2 flex'>
                  <a href="https://www.linkedin.com/in/muhammed-ali-tural/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className='cursor-pointer' /></a>
                </div>
              </div>
          </div>

          <div className='grid gap-10 grid-cols-5'>
              <img className='col-span-2 w-full rounded-full' src={Emre} alt="emre yıldız" srcset="" />
              <div className='col-span-3'>
                <h3 className='text-3xl anton'>EMRE YILDIZ</h3>
                <h3 className='text-3xl text-purple-600/40 anton'>BLOCKCHAIN ADVISER</h3>

                <ul className='text-sm mt-3'>
                  <li>Blockchain Developer</li>
                  <li>Web3 Influencer</li>
                  <li>Student at İzmir Institute of Technology</li>
                  <li>Computer Engineering Department</li>
                  <li>Investor in Web2&Web3</li>
                </ul>

                <div className='mt-2 flex'>
                  <a href="https://x.com/emreyeth?s=11&t=BDdWMiIwolq5Bo20F_3cVg" target="_blank" rel="noopener noreferrer"><TwitterIcon className='cursor-pointer mr-1' /></a>
                  <a href="https://www.linkedin.com/in/emreyildiz1/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className='cursor-pointer' /></a>
                </div>
              </div>
          </div>

        </div>
    </div>
  )
}

export default Dna