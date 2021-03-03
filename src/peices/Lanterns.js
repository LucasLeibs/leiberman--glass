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
          
          <div className="gallery">
      
       <figure className="gallery__item-1-lantern">
    <img src={lantern} className="contain" alt="Image 1"/>
  </figure>
       <figure className="gallery__item-2-lantern">
    <img  src={lantern2} className="contain" alt="Image 1"/>
  </figure>
      
  
      
  <div className="ocotillo-desc">
    <h2>CHINESE LANTERNS</h2>
    <p>THIS IS THE DESCRIPTION OF THE OCTILLOW PICEC IT ORGINAITED 
      IN THE DESTERNM AND I LOCE IT AND FH DFNISHDFDSF 
      ADF I MADE IT FROM THE BOTTOM OF MY HEASKDRHJUIR.
    </p>
  </div>
  </div>
        </section>
    )
}
