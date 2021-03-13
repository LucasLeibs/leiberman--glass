import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import MediaQuery from "react-responsive";
import shelter from '../images/glass/shelter.jpg'
import urchin from '../images/urchins/tullpurple.jpg'
import urchinslider from '../images/urchins/tullpurple.jpg'
import shelter3 from '../images/glass/shelter3.jpg'
import blue from '../images/glass/bluelean.jpg'
import Anime from 'react-anime'
export default function Home() {
  return (
    <section id="home">
      <MediaQuery minWidth={700}>
      
        <div className="home-gallery">


   
        <figure className="home-image-1">
          <img className="home1" src={shelter}></img>
        </figure>
        
        <figure className="home-image-2">
          <img className="home1" src={urchin}></img>
        </figure>
        <figure className="home-image-3">
          <img className="home1" src={blue}></img>
        </figure>
        <figure className="home-image-4">
          <img className="home1" src={shelter3}></img>
        </figure>
       
        </div>
     
      </MediaQuery>
      <MediaQuery maxWidth={700}>
        <h2 className="mobile-title">LEIBERMAN GLASS</h2>
        <ReactPlayer
          className="react-player "
          url="/videos/movie.mov"
          width="90vw"
          height="100vw"
          controls={false}
          loop={true}
          playing={true}
          muted={true}
        />
        <Link to="/work">
          <button className="work-button-mobile">WORK</button>
        </Link>
      </MediaQuery>
    </section>
  );
}
