import React from 'react'
import tallurchin1 from '../images/urchins/IMG_3234.jpg'
import tallurchin2 from '../images/urchins/IMG_3275.JPG'
import tallurchin3 from '../images/urchins/IMG_3325.JPG'
import tallurchin4 from '../images/urchins/IMG_3291.JPG'
import shorturchin from '../images/urchins/IMG_3334.jpg'
import shorturchin2 from '../images/urchins/IMG_3350.JPG'
export default function Urchins() {
    return (
        <section id="urchins">
          
          
      
        <div className="gallery">
         <figure className="gallery__item-1-urchin">
      <img src={tallurchin1} className="contain"
       alt="Image 1"/>
       <p>Aqua Urchin - tall</p>
    </figure>
         <figure className="gallery__item-2-urchin">
      <img src={tallurchin2}  className="contain" alt="Image 1"/>
      <p>Amethyst Urchin - tall</p>
    </figure>
         <figure className="gallery__item-3-urchin">
      <img src={tallurchin3}  className="contain" alt="Image 1"/>
      <p>Aqua Urchin</p>
    </figure>
         <figure className="gallery__item-4-urchin">
      <img src={tallurchin4}  className="contain" alt="Image 1"/>
      <p>Aurora Urchin</p>
    </figure>
         <figure className="gallery__item-5-urchin">
      <img src={shorturchin}  className="gallery__img" alt="Image 1"/>
      <p>Aurora Urchin Slider</p>
    </figure>
         <figure className="gallery__item-6-urchin">
      <img src={shorturchin2}  className="gallery__img" alt="Image 1"/>
      <p>Amethyst Urchin Slider</p>
    </figure>
      
     
        
    <div className="ocotillo-desc">
      <h2>URCHIN VESSELS</h2>
      <p>Colorful, vibrant, sand etched vessels encompassing the spirit of the ocean.
      </p>
    </div>
    </div>
    
        
          </section>
    )
}
