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
import ReactPlayer from 'react-player'
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
          <ReactPlayer
            className='react-player '
            url= ''
            width ='100vw'
            height='100vw'

            controls = {true}
            loop = {true}
            playing={true}
            muted={true}
            />

      
        
       
     </section>
    )
}
