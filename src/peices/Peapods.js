import React from 'react'
import peapod1 from '../images/glass/IMG_7175.JPG'
import peapod2 from '../images/glass/IMG_7179.JPG'
import peapod3 from '../images/glass/IMG_7180.JPG'
import greenPeapod from '../images/glass/IMG_7188.JPG'
import greenPeapod2 from '../images/glass/IMG_7191.JPG'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import Anime from 'react-anime';
const slideImages = [
    greenPeapod,
    peapod1,
   greenPeapod2,
    peapod2,
  
    peapod3
  ];
  
export default function Lanterns() {
    return (
        <section id="peapods">
          
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
         
        </Fade>
        </Anime>
        
      </div>
        </section>
    )
}
