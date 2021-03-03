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
  </figure>
  <figure className="gallery__item-4-acorns">
    <img src={olive} className="contain" alt="Image 1"/>
  </figure>
  
  <figure className="gallery__item-5-acorns">
    <img src={green} className="contain" alt="Image 1"/>
  </figure>
  
  <figure className="gallery__item-6-acorns">
    <img src={red} className="contain" alt="Image 1"/>
  </figure>
  
      
  <div className="ocotillo-desc">
    <h2>ACORN PAPERWEIGHTS</h2>
    <p>THIS IS THE DESCRIPTION OF THE OCTILLOW PICEC IT ORGINAITED 
      IN THE DESTERNM AND I LOCE IT AND FH DFNISHDFDSF 
      ADF I MADE IT FROM THE BOTTOM OF MY HEASKDRHJUIR.
    </p>
  </div>
  </div>
        </section>
        </div>
    )
}
