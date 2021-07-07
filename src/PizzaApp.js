import React from 'react'
import Hero from './components/Hero'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';

const PizzaApp = () => {
    return (
        <Router>
            <GlobalStyle />
            <Hero />
        </Router>
    )
}

export default PizzaApp
