import React from 'react';
import {BrowserRouter as Routes, Route} from 'react-router-dom';
import Header from './header';
import Home from './Component/home';
import Footer from './footer';
export default function Routing(){
    return(
        <Routes>
            <Header/>
            <Route path="/" component={Home} />
            <Footer/>
        </Routes>
    )
}