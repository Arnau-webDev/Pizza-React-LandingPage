import React, { useState } from 'react'
import Hero from './components/Hero'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Products from './components/Products';
import { productData, productDataTwo } from './data/data.js';
import Feature from './components/Feature';
import Footer from './components/Footer';

const PizzaApp = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const specialToggle = () => {
        isOpen && setIsOpen(!isOpen);
    }

    const handleSidebarToggle = {
        isOpen,
        toggle,
        specialToggle
    }

    return (
        <Router>
            <GlobalStyle />
            <Hero handleSidebar={handleSidebarToggle} />
            <Products specialToggle={specialToggle} data={productData} heading="Choose your favourite pizza" />
            <Feature specialToggle={specialToggle} />
            <Products specialToggle={specialToggle} data={productDataTwo} heading="Choose your favourite dessert" />
            <Footer specialToggle={specialToggle} />
        </Router>
    )
}

export default PizzaApp;
