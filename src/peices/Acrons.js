import React from 'react'
import ReactPlayer from 'react-player'
import acornspread from '../images/acorns/acorns.jpg'
export default function Acrons() {
    return (
        <div>
              <section>
          
          <div className="gallery">
      
       <figure className="gallery__item-2-acorns">
    <img src={acornspread} id="contain" className="gallery__img" alt="Image 1"/>
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
      
  
      
  <div className="ocotillo-desc">
    <h2>CHINESE LANTERNS</h2>
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
