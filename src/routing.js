import React from 'react';
import {BrowserRouter as Routes, Route} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
export default function Routing(){
    return(
        <Routes>
            <Header/>
            <Footer/>
        </Routes>
    )
}