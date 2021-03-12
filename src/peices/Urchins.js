import React, {useState} from 'react'
import tallurchin1 from '../images/urchins/tallbluespikey.jpg'
import tallurchin2 from '../images/urchins/tullpurple.jpg'
import tallurchin3 from '../images/urchins/bluemedium.jpg'
import tallurchin4 from '../images/urchins/redmedium.jpg'
import shorturchin from '../images/urchins/redslider.jpg'
import shorturchin2 from '../images/urchins/purpleslider.jpg'
import MediaQuery from 'react-responsive'

export default function Urchins() {
const [state, setModal] = useState({
  img1: false, img2: false, img3: false, img4:false, img5: false, img6:false
})
console.log(state)

const x1 = <svg onClick={() => setModal({img1: !state.img1})} xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
const x2 = <svg onClick={() => setModal({img2: !state.img2})} xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
const x3 = <svg onClick={() => setModal({img3: !state.img3})} xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
const x4 = <svg onClick={() => setModal({img4: !state.img4})} xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
const x5 = <svg onClick={() => setModal({img5: !state.img5})} xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
const x6 = <svg onClick={() => setModal({img6: !state.img6})} xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
    return (
        <section id="urchins">
          
          
      <MediaQuery minWidth={700}>
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
    </MediaQuery>



    <MediaQuery maxWidth={700}>
      
    <div className="gallery-mobile">
         <figure className="gallery__item-1-urchin-mobile">
         {state.img1 ? <div className="modal">
        {x1}
    
      <img className="modal-img"src={tallurchin1}></img>
    </div> : ''}
      <img src={tallurchin1} className="contain"
       alt="Image 1"/>
         <svg onClick={() => setModal({img1: !state.img1})}id="img1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-zoom-in" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
  <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
  <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
</svg>
       <p>Aqua Urchin - tall</p>
    </figure>

{/* FIGURE 2 */}
         <figure className="gallery__item-2-urchin-mobile">
         {state.img2 ? <div className="modal">
   {x2}
    
      <img className="modal-img"src={tallurchin2}></img>
    </div> : ''}
      <img src={tallurchin2}  className="contain" alt="Image 1"/>
      <svg onClick={() => setModal({img2: !state.img2})} id="img1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-zoom-in" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
  <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
  <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
</svg>
      <p>Amethyst Urchin - tall</p>

 {/* FIGURE 3 */}
    </figure>
    {state.img3 ? <div className="modal">
    <svg onClick={() => setModal({img3: !state.img3})} xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
    
      <img className="modal-img"src={tallurchin3}></img>
    </div> : ''}
         <figure className="gallery__item-3-urchin-mobile">
      <img src={tallurchin3}  className="contain" alt="Image 1"/>
      <svg onClick={() => setModal({img3: !state.img3})}id="img3" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-zoom-in" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
  <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
  <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
</svg>
      <p>Aqua Urchin</p>
    </figure>

    {/* FIGURE 4 */}
         <figure className="gallery__item-4-urchin-mobile">
         {state.img4 ? <div className="modal">
   {x4}
   
      <img className="modal-img"src={tallurchin4}></img>
    </div> : ''}
      <img src={tallurchin4}  className="contain" alt="Image 1"/>
      <svg onClick={() => setModal({img4: !state.img4})}id="img3" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-zoom-in" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
  <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
  <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
</svg>
      <p>Aurora Urchin</p>

      {/* FIGURE 5 */}
    </figure>
    {state.img5 ? <div className="modal">
   {x5}
    
      <img className="modal-img"src={shorturchin}></img>
    </div> : ''}
         <figure className="gallery__item-5-urchin-mobile">
      <img src={shorturchin}  className="gallery__img" alt="Image 1"/>
      <svg onClick={() => setModal({img5: !state.img5})}id="img3" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-zoom-in" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
  <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
  <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
</svg>
      <p>Aurora Urchin Slider</p>


      {/* FIGURE 6 */}
    </figure>
    
         <figure className="gallery__item-6-urchin-mobile">
         {state.img6 ? <div className="modal">
   {x6}
 
      <img className="modal-img"src={shorturchin2}></img>
    </div> : ''}
      <img src={shorturchin2}  className="gallery__img" alt="Image 1"/>
      <svg onClick={() => setModal({img6: !state.img6})}id="img3" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-zoom-in" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
  <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
  <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
</svg>
      <p>Amethyst Urchin Slider</p>
    </figure>
      
     
        
    <div className="ocotillo-desc-mobile">
      <h2>URCHIN VESSELS</h2>
      <p>Colorful, vibrant, sand etched vessels encompassing the spirit of the ocean.
      </p>
    </div>
    </div>
    </MediaQuery>
        
          </section>
    )
}
