import React from 'react'
import ReactPlayer from 'react-player'
import acornspread from '../images/acorns/acorns.jpg'
import green from '../images/acorns/IMG_3138.JPG'
import red from '../images/acorns/IMG_3141.JPG'
import olive from '../images/acorns/IMG_3139.JPG'
import autumn from '../images/acorns/IMG_3135.JPG'
export default function Acrons() {
    return (
        <div>
              <section>
          
          <div className="gallery">
         
       <figure className="gallery__item-2-acorns">
      
    <img src={acornspread} id="contain" className="contain" alt="Image 1"/>
    
  </figure>
  <figure className="gallery__item-1">
       <ReactPlayer
            className='react-player '
            url= '/videos/acorns.mp4'
            width ='100%'
            height='100%'

            controls = {false}
            loop = {true}
            playing={true}
            muted={true}
            />

    {/* <img src={blue} className="gallery__img" alt="Image 1"/> */}
  </figure>
  <figure className="gallery__item-3-acorns">
    <img src={autumn} className="contain" alt="Image 1"/>
    <p>Aurora</p>
  </figure>
  <figure className="gallery__item-4-acorns">
    <img src={olive} className="contain" alt="Image 1"/>
    <p>Olive</p>
  </figure>
  
  <figure className="gallery__item-5-acorns">
    <img src={green} className="contain" alt="Image 1"/>
    <p>Citron</p>
  </figure>
  
  <figure className="gallery__item-6-acorns">
    <img src={red} className="contain" alt="Image 1"/>
    <p>Cranberry</p>
  </figure>
  <figure className="gallery__item-acorn-arrow">
  <svg id="down-arrow" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>
  </figure>
  
      
  <div className="ocotillo-desc">
    <h2>ACORN PAPERWEIGHTS</h2>
    <p>The acorn has been known as a symbol of prosperity and good luck. These jewel tone paperwights make a beautiful accent for any home or office.
    <p>Colors not shown in set: Amethyst, Amber, Capri Blue</p>
    </p>
  </div>
  </div>
        </section>
        </div>
    )
}
