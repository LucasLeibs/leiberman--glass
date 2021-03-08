import React, {useState} from 'react'

import { Link } from "react-router-dom";
import MediaQuery from 'react-responsive'
import Anime from 'react-anime';
export default function WorkNav() {
  const [navOpen, setNav] = useState(true)
  console.log(navOpen)
  const toggleNav = () => {
    setNav(!navOpen)
  }
    return (
      <div>
        <MediaQuery minWidth={700}>
        <nav className="navbar">
          
        <ul>
        <Anime
          loop={false}
          duration={3000}
          direction="alternate"
          delay={(el, index) => index * 240}
          translateX='20rem'
          scale={[.95, .9]}
          >
           <li><h1>WORK</h1>  </li> 
           <li>
            <Link
              className="link"
             to="/work"
            >
              URCHINS
            </Link>
          </li>
          <li>
            {" "}
            <Link
            className="link"
              to="/peapods"
         
            >
           PEAPODS
            </Link>
          </li>
          <li>
            <Link
            className="link"
              to="/lanterns"
        
            >
              LANTERNS
            </Link>
          </li>
          <li>
            <Link
              className="link"
                to="/ocotillo"
            >
            OCOTILLO
            </Link>
          </li>
         
          <li>
            <Link
              className="link"
             to='/acorns'
            >
              ACORNS
            </Link>
          </li>
          <li>
           
          </li>
          </Anime>
        </ul>
       
      </nav>
      </MediaQuery>
      <MediaQuery maxWidth={700}>
        {navOpen ? <nav className="navbar-mobile-work">
          
          <ul>
          <Anime
            loop={false}
            duration={3000}
            direction="alternate"
            delay={(el, index) => index * 240}
            translateX='0rem'
            scale={[.95, .9]}
            >
             <li><h1>WORK</h1>  </li> 
             <li>
              <Link
                className="link"
               to="/work"
              >
                URCHINS
              </Link>
            </li>
            <li>
              {" "}
              <Link
              className="link"
                to="/peapods"
           
              >
             PEAPODS
              </Link>
            </li>
            <li>
              <Link
              className="link"
                to="/lanterns"
          
              >
                LANTERNS
              </Link>
            </li>
            <li>
              <Link
                className="link"
                  to="/ocotillo"
              >
              OCOTILLO
              </Link>
            </li>
           
            <li>
              <Link
                className="link"
               to='/acorns'
              >
                ACORNS
              </Link>
            </li>
            <li>
             
            </li>
            </Anime>
          </ul>
        <button onClick={() => toggleNav()}>close</button>
        </nav> : <svg onClick={() => toggleNav()} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>}
     
      </MediaQuery>
      </div>
    )
}


