import React from 'react'

import logo from '../images/glass/logo.png'
import blue from '../images/glass/IMG_7240.JPG'
import red from '../images/glass/IMG_7219.JPG'
import blue2 from '../images/glass/IMG_7248.JPG'
import lantern from '../images/glass/IMG_7171.JPG'
import pea from '../images/glass/IMG_7188.JPG'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import Anime from 'react-anime';
const slideImages = [
    lantern,
    blue,
    red,
    pea,
    blue2,
  ];
  
export default function Home() {
 
    return (
        <section id="home">
           <Anime duration={6000} opacity={[0, 1]} translateY={'3em'} delay={(e, i) => i * 1000}>
    <h1>LEIBERMAN <br></br>GLASS</h1>
    </Anime>
    
         <div className="slide-container">
         <Anime duration={2000} opacity={[0, 1]} translateY={'2em'} delay={(e, i) => i * 1000}>
        <Fade>
          <div className="each-slide">
            <div >
             <img src={slideImages[0]}></img>
            </div>
          </div>
          <div className="each-slide">
          <div>
             <img src={slideImages[1]}></img>
            </div>
          </div>
          <div className="each-slide">
          <div>
             <img src={slideImages[2]}></img>
            </div>
          </div>
          <div className="each-slide">
          <div>
             <img src={slideImages[3]}></img>
            </div>
          </div>
        </Fade>
        </Anime>
        
      </div>
    
       


      
        
       
     </section>
    )
}
