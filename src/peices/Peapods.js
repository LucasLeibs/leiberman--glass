import React, {useState} from 'react'
import WorkNav from '../components/WorkNav'
import peapod3 from '../images/glass/redpea.jpg'
import greenPeapod from '../images/glass/greenpea.jpg'


import MediaQuery from 'react-responsive'

  
export default function Lanterns() {
  
    return (
        <section id="peapods">
          
          
      <MediaQuery minWidth={1269}>
      {/* <WorkNav></WorkNav> */}
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
    <p>A simply elegant seed vessel, holding three pure silver leaf covered, solid glass peas.
    </p>
  </div>
  </div>
  </MediaQuery>
  <MediaQuery maxWidth={1270}>
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
    <p>A simply elegant seed vessel, holding three pure silver leaf covered, solid glass peas.
    </p>
  </div>
  </div>
  </MediaQuery>
      
        </section>
    )
}
