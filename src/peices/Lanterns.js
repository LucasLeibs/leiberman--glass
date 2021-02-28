import React from 'react'
import lantern from '../images/glass/IMG_7171.JPG'
import lantern2 from '../images/glass/IMG_7172.JPG'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import Anime from 'react-anime';
const slideImages = [
    lantern,
    lantern2
  ];
  
export default function Lanterns() {
    return (
        <section>
          
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
         
        </Fade>
        </Anime>
        
      </div>
        </section>
    )
}
