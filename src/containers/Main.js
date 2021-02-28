import React from 'react'
import Nav from '../components/Nav';
import Home from '../components/Home';
import About from '../components/About';
import Catalog from '../components/Catalog';
import Contact from '../components/Contact';


export default function Main() {
    return (
        <div>
            <Nav></Nav>
            <Home></Home>
            <About></About>
       
            <Contact></Contact>
        </div>
    )
}
