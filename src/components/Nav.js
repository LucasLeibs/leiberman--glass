import React from "react";
import { Link } from "react-scroll";
import {Link as Linky} from 'react-router-dom'
import Anime from 'react-anime';
export default function Nav() {
  
  return (
    
      <nav className="navbar">
        
          
        <ul>
        <Anime
          loop={false}
          duration={3000}
          direction="alternate"
          delay={(el, index) => index * 240}
          translateX='5rem'
          scale={[.95, .9]}
          >
              
          <li>
            <Link
              className="link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
            >
              LEIBERMAN GLASS
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className="link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Linky
              className="link"
              activeClass="active"
              to="/work"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
            >
              CATALOG
            </Linky>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
            >
              CONTACT
            </Link>
          </li>
          </Anime>
        </ul>
       
      </nav>
    
  );
}
