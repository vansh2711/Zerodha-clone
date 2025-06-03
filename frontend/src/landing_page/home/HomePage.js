import React from 'react'
import Awards from './Awards';
import Education from './Education';
import Pricing from './Pricing';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Stats from './Stats';

function HomePage() {
    return ( 
        <>
        <Hero />
        <Awards />
        < Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        </>
     );
}

export default HomePage;