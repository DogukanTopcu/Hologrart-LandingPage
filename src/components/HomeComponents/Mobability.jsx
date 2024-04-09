import React from 'react';


import Mob1 from "../../assets/images/mob1.jpg";
import Mob2 from "../../assets/images/mob2.png";
import Mob3 from "../../assets/images/mob3.png";
import Mob4 from "../../assets/images/mob4.jpg";
import Mob5 from "../../assets/images/mob5.jpg";
import Mob6 from "../../assets/images/mob6.jpg";


const Card = ({title, desc, img}) => {
    return (
        <div className='flex flex-col gap-6 items-center p-5'>
            <img className='rounded-xl  max-h-56' src={img} alt="img" />
            <h2 className='text-4xl text-center anton'>{title}</h2>
            <p className='text-center'>{desc}</p>
        </div>
    )
}


const Mobability = () => {
  return (
    <div className='container max-w-7xl mx-auto text-white py-16'>
        <h1 className='anton text-6xl'>MOBABILITY:</h1>
        <h1 className='anton text-6xl text-green-600/40'>INTERNET OF MOBILITY</h1>

        <div className='mt-10'>
            <p className='h-full text-[24px] w-5/6 mx-auto text-center flex items-center justify-center'>Mobability offers not only a driving experience in mobility, but also a lifestyle. Car owners can not only drive, but also interact, earn and experience with their vehicles. Step into the mobility world of the future and discover a whole new driving experience with Mobability!</p>
        </div>

        <h1 className='anton text-5xl mt-16'>FEATURES:</h1>
        <p>Mobability is software that is shaping the future of mobile vehicles and brings a whole new perspective to the world of mobility. It offers drivers a unique experience by creating digital twins of their vehicles, giving them the opportunity to control their vehicles via the mobile app, detect problems and even showcase their vehicles in the holographic metaverse. Here are the remarkable features of Mobability:</p>

        <div className='grid grid-cols-3 gap-10 mt-10'>
            <Card img={Mob1} title="Innovative and Profitable Driving Experience" desc="Mobability goes beyond just providing drivers with a driving experience. Drivers can earn by participating in different activities while driving. This makes driving more fun and interactive, while also providing opportunities to generate income." />
            <Card img={Mob2} title="Next Generation Expertise" desc="The software gets down to the finest details of the vehicles, detecting problems such as cracks, internal faults and recording them on the digital twin. This allows drivers to better understand and maintain their vehicles." />
            <Card img={Mob3} title="Remote Control and Management" desc="Mobability allows drivers to manage their vehicles remotely. Basic functions such as lights, heating and door locks can be easily controlled via the mobile app." />
            <Card img={Mob4} title="Ease of Location and Navigation" desc="The location information of the vehicles is recorded and marked on the maps. This makes it easier for drivers to find where they parked their vehicles." />
            <Card img={Mob5} title="A Unique Experience with Hologrart Metaverse" desc="Mobability offers drivers the opportunity to display and use their vehicles in the hologrart metaverse. This opens up a new dimension of vehicle ownership and sharing in the virtual world." />
            <Card img={Mob6} title="Community and Collaboration" desc="The Mobability ecosystem enables drivers to communicate and collaborate. In special events, drivers can produce joint NFTs specific to the roads they drive. This brings mobility enthusiasts together and opens the doors to creating shared experiences." />
        </div>

    </div>
  )
}

export default Mobability