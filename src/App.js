import './style.css';

import Calendar from './components/Calendar/Calendar';
import Details from './components/Details/Details';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import React from 'react';

function App() {
    return (
        <>
            <Header />
            <Main />
            <Features />
            <Details />
            <Calendar />
            <Footer />
        </>
    );
}

export default App;
