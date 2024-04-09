import React, { useState } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Metaverse1 from "../../assets/images/metaverse-scene1.png";
import Metaverse2 from "../../assets/images/meta2.png";
import Metaverse3 from "../../assets/images/meta3.png";
import Metaverse4 from "../../assets/images/meta4.png";
import Metaverse5 from "../../assets/images/meta5.png";
import Metaverse6 from "../../assets/images/meta6.png";
import Metaverse7 from "../../assets/images/meta7.png";
import Metaverse8 from "../../assets/images/meta8.png";
import Metaverse9 from "../../assets/images/meta9.png";



const Card = ({title, desc, img}) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className='card-wrap'>
            <img className='object-cover' src={img} alt="img" />
            <div className='bottom-wrap absolute z-10 w-full h-1/3 transition-all duration-300'>
                <div className='w-full backdrop-blur-xl bg-black/20 px-5 py-2 h-full flex flex-col items-center justify-center '>
                    <h2 className='md:text-xl text-xs w-full text-center anton'>{title}</h2>
                    {
                        isHover ? <p className='text-center sm:mt-3 text-white/80 sm:text-md text-xs'>{desc}</p> : null
                    }
                </div>
            </div>
        </div>
    )
}


const Metaverse = () => {
  return (
    <div className='container max-w-7xl mx-auto text-white py-16 text-black xl:px-0 px-3'>
        <h1 className='anton text-4xl sm:text-6xl text-black'>HOLOGRART METAVERSE:</h1>
        <h1 className='anton text-4xl sm:text-6xl text-yellow-600/40'>THE FUTURE OF NFTS</h1>

        {/* TODO: Fill content */}
        <div className='grid gap-4 md:grid-cols-2 grid-cols-1 mt-12'>
            <p className='h-full text-[16px] sm:text-[24px] w-5/6 mx-auto text-center flex items-center justify-center text-black'>The Hologrart Metaverse is a unique metaverse that brings together art, technology, entertainment and monetization opportunities. We are happy to welcome you in the magical world of the future and the past!</p>
            <img className='rounded-xl max-w-48' src={Metaverse1} alt="metaverse" />
        </div>

        
        <div className='grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-3 mt-10'>
            <Card img={Metaverse2} title="The Meeting of Art and Technology: NFT Centered Experience" desc="Hologrart Metaverse offers an innovative platform for artists and collectors, allowing you to explore a new dimension of digital art. Through NFTs, artworks are transformed into digital assets and artists are fairly rewarded. Taking the evolution of art into the future, this platform invites you to push the boundaries of creativity." />
            <Card img={Metaverse3} title="Future meets Past: Unique Theme and Design" desc="Hologrart Metaverse brings you a unique experience by combining modern design with historical and mythological elements. As you travel between the technology of the future and the mysticism of the past, you may find yourself traveling through time." />
            <Card img={Metaverse6} title="Playful Experience with Gamification" desc="The platform offers its users a fun and interactive experience using gamification elements. You can create your own avatar, compete or collaborate with other users in different activities. Hologrart Metaverse blends entertainment with technology to create a world that draws you in." />
            <Card img={Metaverse5} title="Digital World Full of Events" desc="The Hologrart Metaverse comes alive with fun events organized from time to time. Art exhibitions, thematic competitions, concerts and more bring the platform's users together and increase their interaction. It allows you to create unforgettable memories by combining art and entertainment." />
            <Card img={Metaverse4} title="Opportunities for Users to Earn Revenue" desc="The platform offers its users opportunities to create content and artworks. This way, you can showcase your talents, generate income through NFTs and contribute to the art community." />
            <Card img={Metaverse7} title="User-Friendly Interface" desc="Hologrart Metaverse offers a simple and effective interface where users can easily navigate and understand the opportunities the platform offers. Users do not need complex technical knowledge to enjoy the platform." />
            <Card img={Metaverse8} title="Unique Design" desc="Hologrart Metaverse has a unique design and layout that sets it apart from other metaverse. It captivates you with aesthetically impressive visuals and unique design elements that enhance the user experience." />
            <Card img={Metaverse9} title="Strong and Experienced Team" desc="Hologrart Metaverse is created by a strong team. Experienced developers, artists, designers and specialists guarantee the quality and innovation of the platform." />
        </div>
        

        <div className='mt-10 mb-16 text-black'>
            <h2 className='text-[20px] sm:text-[32px] mt-10 mb-5 font-bold archivo'>Check out the Pre-Alpha Release</h2>
            <p className='col-span-2 h-full text-[16px] sm:text-[24px] flex items-center justify-center'>For enthusiasts, it is possible to access the pre-alpha version. This way, you can closely follow the development process of Hologrart Metaverse and have the opportunity to experience the experience in advance.</p>
        </div>
        
        <a target='_blank' rel='noreferrer' href='https://metaverse.hologrart.com/' className='sm:text-xl text-sm mt-10 text-white border-4 border-purple-800 px-6 py-4 hover:text-white hover:bg-purple-800 transition-all duration-300'>Try pre-Alfa <OpenInNewIcon /></a>
    </div>
  )
}

export default Metaverse