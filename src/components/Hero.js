import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';

const Hero = ({ handleSidebar }) => {

    const { toggle, specialToggle, isOpen } = handleSidebar;

    return (
        <HeroContainer>
            {/* <Navbar toggle={toggle} specialToggle={specialToggle} /> */}
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent onClick={specialToggle}>
                <HeroItems>
                    <HeroH1>Greatest Pizza you have ever had</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
