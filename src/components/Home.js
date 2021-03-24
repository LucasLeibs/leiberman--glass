import React, {useState} from "react";
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
const [isShown, showIt] = useState(false)
  console.log(showIt)
  return (
    <section id="home">
      <MediaQuery minWidth={1270}>
      
        <div className="home-gallery">


        <p className="big-title">LEIBERMAN GLASS</p>
        <figure onMouseEnter={() => showIt(true)}  className="home-image-1">
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
     
      <MediaQuery maxWidth={1269}>
        <h2 className="mobile-title">LEIBERMAN GLASS</h2>
        <div className="home-gallery-mobile">


        
        <figure onMouseEnter={() => showIt(true)}  className="home-image-1">
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
        {/* <ReactPlayer
          className="react-player "
          url="/videos/movie.mov"
          width="90vw"
          height="100vw"
          controls={false}
          loop={true}
          playing={true}
          muted={true}
        /> */}
        <Link to="/work">
          <button className="work-button-mobile">WORK</button>
        </Link>
      </MediaQuery>
    </section>
  );
}
