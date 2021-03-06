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
import MediaQuery from 'react-responsive'
export default function Home() {
 
    return (
      
        <section id="home">
          <MediaQuery minWidth={700}>
          <ReactPlayer
            className='react-player '
            url= '/videos/movie.mp4'
            width ='100vw'
            height='100vw'

            controls = {false}
            loop = {true}
            playing={true}
            muted={true}
            />
</MediaQuery>   
      <MediaQuery maxWidth={700}>
     <h2 className="mobile-title">LEIBERMAN GLASS</h2>
      <ReactPlayer
            className='react-player '
            url= '/videos/movie.mp4'
            width ='90vw'
            height='100vw'

            controls = {false}
            loop = {true}
            playing={true}
            muted={true}
            />
      </MediaQuery>
        
       
     </section>
    )
}
