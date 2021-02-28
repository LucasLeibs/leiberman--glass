import React from 'react'
import {Link as Linky} from "react-router-dom";
import BrowsePieces from './BrowsePieces'
import blue from '../images/glass/IMG_7240.JPG'
import red from '../images/glass/IMG_7219.JPG'
import blue2 from '../images/glass/IMG_7248.JPG'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import Anime from 'react-anime'
export default function Catalog() {

    return (
        
        <section id="catalog">
  
       
        
       
     
          
         
     <Linky className="button-link" to='/work'> <Anime loop={true}
          duration={3000}
          direction="normal"
          delay={(el, index) => index * 240}
         easing={'easeInSine'}
          scale={[.9]}><h2>VIEW PIECES</h2></Anime></Linky>

        </section>
        
    )
}

