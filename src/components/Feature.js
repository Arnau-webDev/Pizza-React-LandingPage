import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements'

const Feature = ({ specialToggle }) => {
    return (
        <FeatureContainer onClick={specialToggle} id="menuSection">
            <h1>Pizza of the day</h1>
            <p>Truffle alfredo sauce topped with 24 carat</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature;
