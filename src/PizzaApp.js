import React from 'react'
import Hero from './components/Hero'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Products from './components/Products';
import { productData, productDataTwo } from './data/data.js';
import Feature from './components/Feature';
import Footer from './components/Footer';

const PizzaApp = () => {
    return (
        <Router>
            <GlobalStyle />
            <Hero />
            <Products name="section1" heading="Choose your favourite pizza" data={productData} />
            <Feature />
            <Products heading="Choose your favourite dessert" data={productDataTwo} />
            <Footer />
        </Router>
    )
}

export default PizzaApp;
