import React, { useState, useRef, useEffect } from "react";

import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import Anime from "react-anime";

export default function WorkNav() {
 
  const [navOpen, setNav] = useState(false);
  console.log(navOpen);
  const toggleNav = () => {
    setNav(!navOpen); 
  };

 
  return (
    
    <div >
   
      <MediaQuery minWidth={1270}>
      <svg id="arrow" onClick={() => window.location.href = "https://www.leibermanglass.com"} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
        <nav className="navbar">
      
          <ul>
          
           
              <li>
                <h1>WORK</h1>{" "}
              </li>
              <li>
                <Link className="link" to="/work">
                  URCHINS
                </Link>
              </li>
              <li>
                {" "}
                <Link  className="link" to="/peapods">
                  PEAPODS
                </Link>
              </li>
              <li>
                <Link className="link" to="/lanterns">
                  LANTERNS
                </Link>
              </li>
              <li>
                <Link className="link" to="/ocotillo">
                  OCOTILLO
                </Link>
              </li>

              <li>
                <Link className="link" to="/acorns">
                  ACORNS
                </Link>
              </li>
              <li></li>
         
          </ul>
        </nav>
      </MediaQuery>
      <MediaQuery maxWidth={1269}>
        
        {navOpen ? (
          <nav    className="navbar-mobile-work">
            <svg
              onClick={() => toggleNav()}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
              id="close-x"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
           <svg  id="home-icon" onClick={() => window.location.href = "https://master.d3evk3sp1ak1p2.amplifyapp.com/"} d="home-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>
            <ul>
          
                <li>
                  <h1>WORK</h1>{" "}
                </li>
                <li>
                  <Link onClick={() => setNav(false)} className="link" to="/work">
                    URCHINS
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link onClick={() => setNav(false)} className="link" to="/peapods">
                    PEAPODS
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setNav(false)} className="link" to="/lanterns">
                    LANTERNS
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setNav(false)} className="link" to="/ocotillo">
                    OCOTILLO
                  </Link>
                </li>

                <li>
                  <Link onClick={() => setNav(false)} className="link" to="/acorns">
                    ACORNS
                  </Link>
                </li>
               
            </ul>
          </nav>
        ) : (
          <svg
            onClick={() => toggleNav()}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        )}
        
      </MediaQuery>
    </div>
  );
}
