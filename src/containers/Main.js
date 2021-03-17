import React, {useState} from "react";
import Nav from "../components/Nav";
import Home from "../components/Home";
import About from "../components/About";
import ScrollToTop from "../components/ScrollToTop";
import Contact from "../components/Contact";

export default function Main() {

 
  return (
      
    <div>
      
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <Contact></Contact>
     
    </div>
  );
}
