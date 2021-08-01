import React, { useState } from 'react'
import Hero from './components/Hero'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Products from './components/Products';
import { productData, productDataTwo, productId1, productId2 } from './data/data.js';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

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
            <Navbar toggle={toggle} specialToggle={specialToggle} />
            <Hero handleSidebar={handleSidebarToggle} />
            <Products specialToggle={specialToggle} data={productData} productId={productId1} heading="Choose your favourite pizza" />
            <Feature specialToggle={specialToggle} />
            <Products specialToggle={specialToggle} data={productDataTwo} productId={productId2} heading="Choose your favourite dessert" />
            <Footer specialToggle={specialToggle} />
        </Router>
    )
}

export default PizzaApp;
