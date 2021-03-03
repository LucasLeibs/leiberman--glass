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
          
          
      
      <div className="gallery">
       <figure className="gallery__item-1-pea">
    <img src={greenPeapod}  className="gallery__img" alt="Image 1"/>
  </figure>
       <figure className="gallery__item-2-pea">
    <img src={peapod3} id="contain" className="contain" alt="Image 1"/>
  </figure>
    
   
      
  <div className="ocotillo-desc">
    <h2>PEAPODS</h2>
    <p>THIS IS THE DESCRIPTION OF THE OCTILLOW PICEC IT ORGINAITED 
      IN THE DESTERNM AND I LOCE IT AND FH DFNISHDFDSF 
      ADF I MADE IT FROM THE BOTTOM OF MY HEASKDRHJUIR.
    </p>
  </div>
  </div>
  
      
        </section>
    )
}
