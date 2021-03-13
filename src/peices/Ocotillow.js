import React, {useState} from 'react'


import blue from '../images/glass/blueice.jpg'
import red from '../images/glass/redlean.jpg'

import blue3 from '../images/glass/bluelean.jpg'

import bluebowl from '../images/glass/bluebowl.jpg'

import ReactPlayer from 'react-player'

import MediaQuery from 'react-responsive'

  
export default function Ocotillow() {
  const [state, setModal] = useState({
    img1: false,
    img2: false,
    img3: false,
    img4: false,
    img5: false,
    img6: false,
  });

  const x1 = (
    <svg
      onClick={() => setModal({ img1: !state.img1 })}
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      fill="currentColor"
      class="bi bi-x"
      viewBox="0 0 16 16"
    >
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>
  );
  const x2 = (
    <svg
      onClick={() => setModal({ img2: !state.img2 })}
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      fill="currentColor"
      class="bi bi-x"
      viewBox="0 0 16 16"
    >
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>
  );
  const x3 = (
    <svg
      onClick={() => setModal({ img3: !state.img3 })}
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      fill="currentColor"
      class="bi bi-x"
      viewBox="0 0 16 16"
    >
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>
  );
  const x4 = (
    <svg
      onClick={() => setModal({ img4: !state.img4 })}
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      fill="currentColor"
      class="bi bi-x"
      viewBox="0 0 16 16"
    >
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>
  );
    return (
        
    <section id="bowls">
      <MediaQuery minWidth={700}>
      <div className="gallery">
       <figure className="gallery__item-2">
       <ReactPlayer
            className='react-player '
            url= '/videos/intro2.mp4'
            width ='100%'
            height='100%'

            controls = {false}
            loop = {true}
            playing={true}
            muted={true}
            />

    {/* <img src={blue} className="gallery__img" alt="Image 1"/> */}
  </figure>
       <figure className="gallery__item-1">
    <img src={blue} className="gallery__img" alt="Image 1"/>
  </figure>
     
  <figure className="gallery__item-3">
    <img  src={blue3}  className="contain" alt="Image 1"/>
  </figure>
       <figure className="gallery__item-4">
    <img src={bluebowl} className="contain" alt="Image 1"/>

   
  </figure>
       <figure className="gallery__item-5">
    <img src={red}  className="contain" alt="Image 1"/>
    
  </figure>
   
      
  <div className="ocotillo-desc">
    <h2>OCOTILLO</h2>
    <p>These sand etched textural vessels are reminiscent of the ocotillo plant found throughout the southwestern region of the United States.
    </p>
  </div>
  </div>
  </MediaQuery>
  <MediaQuery maxWidth={700}>
  <div className="gallery-mobile">
       <figure className="gallery__item-2-mobile">
       <ReactPlayer
            className='react-player '
            url= '/videos/intro2.mp4'
            width ='100%'
            height='100%'

            controls = {false}
            loop = {true}
            playing={true}
            muted={true}
            />

    {/* <img src={blue} className="gallery__img" alt="Image 1"/> */}
  </figure>
       <figure className="gallery__item-1-mobile">
    <img src={blue} className="gallery__img" alt="Image 1"/>
  </figure>
     
  <figure className="gallery__item-3-mobile">
    <img  src={blue3}  className="contain" alt="Image 1"/>
    <svg
              onClick={() => setModal({ img4: !state.img4 })}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-zoom-in"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
              <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
              <path
                fill-rule="evenodd"
                d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
         <p>Red Bowl</p>
  </figure>
       <figure className="gallery__item-4-mobile">
    <img src={bluebowl} className="contain" alt="Image 1"/>

   
  </figure>
       <figure className="gallery__item-5-mobile">
    <img src={red}  className="contain" alt="Image 1"/>
    <svg
              onClick={() => setModal({ img4: !state.img4 })}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-zoom-in"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
              <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
              <path
                fill-rule="evenodd"
                d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
         <p>Red Bowl</p>
  </figure>
   
      
  <div className="ocotillo-desc">
    <h2>OCOTILLO</h2>
    <p>These sand etched textural vessels are reminiscent of the ocotillo plant found throughout the southwestern region of the United States.
    </p>
  </div>
  </div>
    </MediaQuery>
       </section>
    )
}
