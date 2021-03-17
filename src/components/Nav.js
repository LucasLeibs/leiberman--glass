import React from "react";
import { Link } from "react-scroll";
import {Link as Linky} from 'react-router-dom'
import Anime from 'react-anime';
import MediaQuery from 'react-responsive'
export default function Nav() {
 
  
  return (
   <div>
     
     <MediaQuery minWidth={1270}>
      <nav className="navbar">

        <ul>
      <Anime
          loop={false}
          duration={3000}
          direction="alternate"
          delay={(el, index) => index * 240}
          translateX='19rem'
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
            >LEIBERMAN GLASS
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
              WORK
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
      </MediaQuery>
      <MediaQuery oreintation="portrait" maxWidth={1269}>
      <nav className="navbar-mobile">

<ul>
<Anime
  loop={false}
  duration={3000}
  direction="alternate"
  delay={(el, index) => index * 240}
  translateY='0rem'
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
    HOME
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
      WORK
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
  </MediaQuery>
      </div>
      
  );
}
