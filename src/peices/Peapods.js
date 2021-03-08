import React from 'react'
import peapod1 from '../images/glass/IMG_7175.JPG'
import peapod2 from '../images/glass/IMG_7179.JPG'
import peapod3 from '../images/glass/IMG_7180.JPG'
import greenPeapod from '../images/glass/IMG_7188.JPG'
import greenPeapod2 from '../images/glass/IMG_7191.JPG'
import 'react-slideshow-image/dist/styles.css'
import MediaQuery from 'react-responsive'
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
          
          
      <MediaQuery minWidth={700}>
      <div className="gallery">
       <figure className="gallery__item-1-pea">
    <img src={greenPeapod}  className="gallery__img" alt="Image 1"/>
    <p>Green</p>
  </figure>
       <figure className="gallery__item-2-pea">
    <img src={peapod3} id="contain" className="contain" alt="Image 1"/>
    <p>Aurora</p>
  </figure>
    
   
      
  <div className="ocotillo-desc">
    <h2>PEAPODS</h2>
    <p>A Simply elegant seed vessel, holding three pure silver leaf covered, solid glass peas.
    </p>
  </div>
  </div>
  </MediaQuery>
  <MediaQuery maxWidth={700}>
  <div className="gallery-mobile">
       <figure className="gallery__item-1-pea-mobile">
    <img src={greenPeapod}  className="gallery__img" alt="Image 1"/>
    <p>Green</p>
  </figure>
       <figure className="gallery__item-2-pea-mobile">
    <img src={peapod3} id="contain" className="contain" alt="Image 1"/>
    <p>Aurora</p>
  </figure>
    
   
      
  <div className="ocotillo-desc-mobile">
    <h2>PEAPODS</h2>
    <p>A Simply elegant seed vessel, holding three pure silver leaf covered, solid glass peas.
    </p>
  </div>
  </div>
  </MediaQuery>
      
        </section>
    )
}
