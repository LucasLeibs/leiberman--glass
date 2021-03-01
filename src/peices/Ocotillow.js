import React from 'react'

import red2 from "../images/glass/IMG_7230.JPG";
import logo from '../images/glass/logo.png'
import blue from '../images/glass/IMG_7240.JPG'
import red from '../images/glass/IMG_7236.JPG'
import blue2 from '../images/glass/IMG_7198.JPG'
import blue3 from '../images/glass/IMG_7202.JPG'
import blueClose from '../images/glass/IMG_7206.JPG'
import bluebowl from '../images/glass/IMG_7248.JPG'
import blueclose2 from '../images/glass/IMG_7209.JPG'
import ReactPlayer from 'react-player'
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
   
  ];
  
export default function Ocotillow() {
    return (
        
    <section id="bowls">
      
      <div className="gallery">
       <figure className="gallery__item-1">
       <ReactPlayer
            className='react-player '
            url= '/videos/intro2.mp4'
            width ='100%'
            height='100%'

            controls = {false}
            loop = {true}
            playing={true}
            muted={true}
            />

    {/* <img src={blue} className="gallery__img" alt="Image 1"/> */}
  </figure>
       <figure className="gallery__item-2">
    <img src={blue2} className="gallery__img" alt="Image 1"/>
  </figure>
       <figure className="gallery__item-3">
    <img  src={blue3} id="contain" className="gallery__img" alt="Image 1"/>
  </figure>
      
       <figure className="gallery__item-4">
    <img src={bluebowl} className="gallery__img" alt="Image 1"/>
  </figure>
       <figure className="gallery__item-5">
    <img src={red} id="opacity" className="gallery__img" alt="Image 1"/>
  </figure>
   
      
  <div className="ocotillo-desc">
    <h2>OCOTILLO</h2>
    <p>THIS IS THE DESCRIPTION OF THE OCTILLOW PICEC IT ORGINAITED 
      IN THE DESTERNM AND I LOCE IT AND FH DFNISHDFDSF 
      ADF I MADE IT FROM THE BOTTOM OF MY HEASKDRHJUIR.
    </p>
  </div>
  </div>
  
       </section>
    )
}
