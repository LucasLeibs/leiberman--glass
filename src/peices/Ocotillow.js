import React from 'react'

import red2 from "../images/glass/IMG_7230.JPG";
import logo from '../images/glass/logo.png'
import blue from '../images/glass/IMG_7240.JPG'
import red from '../images/glass/IMG_7219.JPG'
import blue2 from '../images/glass/IMG_7248.JPG'
import blue3 from '../images/glass/IMG_7202.JPG'
import blueClose from '../images/glass/IMG_7206.JPG'
import bluebowl from '../images/glass/IMG_7249.JPG'
import redlean from '../images/glass/IMG_7236.JPG'

import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import Anime from 'react-anime';
const slideImages = [
    
    blue,
    red,
    blue2,
    blueClose,
    blue3,
    bluebowl,
    redlean
  ];
  
export default function Ocotillow() {
    return (
        
    <section id="bowls">
      
      <div className="gallery">
       <figure className="gallery__item-1">
    <img src={blue} className="gallery__img" alt="Image 1"/>
  </figure>
       <figure className="gallery__item-2">
    <img src={blue2} className="gallery__img" alt="Image 1"/>
  </figure>
       <figure className="gallery__item-3">
    <img src={redlean} className="gallery__img" alt="Image 1"/>
  </figure>
  <div className="ocotillo-desc">
    <h1>OCOTOLLO</h1>
    <p>THIS IS THE DESCRIPTION OF THE OCTILLOW PICEC IT ORGINAITED 
      IN THE DESTERNM AND I LOCE IT AND FH DFNISHDFDSF 
      ADF I MADE IT FROM THE BOTTOM OF MY HEASKDRHJUIR.
    </p>
  </div>
  </div>
  
       </section>
    )
}
