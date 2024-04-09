import React, { useState } from 'react';

import JNFT1 from "../../assets/images/jnft1.jpg";
import JNFT2 from "../../assets/images/jnft2.png";
import JNFT3 from "../../assets/images/jnft3.png";
import JNFT4 from "../../assets/images/jnft4.png";
import JNFT5 from "../../assets/images/jnft5.png";
import JNFT6 from "../../assets/images/jnft6.jpg";


// const Card = ({title, desc, img}) => {
//     return (
//         <div className='flex flex-col gap-6 items-center p-5'>
//             <img className='rounded-xl  max-h-56' src={img} alt="img" />
//             <h2 className='text-4xl text-center anton'>{title}</h2>
//             <p className='text-center'>{desc}</p>
//         </div>
//     )
// }

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

const Jnft = () => {
  return (
    <div className='container max-w-7xl mx-auto text-white py-16 lg:px-0 px-3'>
        <h1 className='anton text-4xl sm:text-6xl'>JOINT NFT GENERATION:</h1>
        <h1 className='anton text-4xl sm:text-6xl text-purple-600/40'>NEW GENE NFT GENERATION</h1>
        
        {/* TODO: Fill content */}
        <div className='mt-10'>
            <p className='h-full text-[16px] sm:text-[24px] w-5/6 mx-auto text-center flex items-center justify-center'>Joint NFT Generation offers an innovative and fun experience, pushing the boundaries of art and collaboration. Feel the power of collaborative projects, explore various art genres and enjoy a sustainable income. Join this exciting world and experience the collective power of art!</p>
        </div>

        <h1 className='anton text-3xl sm:text-5xl mt-16'>FEATURES:</h1>
        
        
        <div className='grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-3 mt-10'>
            <Card img={JNFT1} title="Create a Powerful Synthesis of Art and Collaboration" desc="Joint NFT Generation is a special platform for artists and creatives to come together in collaborative projects to create unique works. Team members come from different fields, bring together different talents and work collectively." />
            <Card img={JNFT2} title="Gamify NFT Generation" desc="The platform gamifies the NFT production process, making it more fun and interactive. Users can participate in NFT production and win prizes through different events, competitions and tasks." />
            <Card img={JNFT3} title="Offer Variety with Different Types of Art" desc="Joint NFT Generation is a platform where NFTs can be produced in various art genres such as Voxel Art, Pixel Art, Music, Puzzle, Story, Drawing. In this way, it offers a wide range for users with different interests." />
            <Card img={JNFT4} title="Showcase Your Artworks in Your Own Marketplace" desc="The platform's own marketplace provides a platform for the exhibition and sale of produced NFTs. Artists and users can expose their creations to a wide audience and generate revenue." />
            <Card img={JNFT5} title="Bring the Community Together with Fun Events" desc="Joint NFT Generation brings its community together through fun events. It strengthens the bonds between users through art contests, interactive activities and thematic events." />
            <Card img={JNFT6} title="Provide Sustainable Income for Artists" desc="The platform provides artists with a sustainable source of income. The income from the NFTization and sale of the works created by participating in collaborative projects is distributed fairly and transparently to all contributors." />
        </div>

    </div>
  )
}

export default Jnft