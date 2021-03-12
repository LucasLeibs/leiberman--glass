import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import MediaQuery from "react-responsive";
export default function Home() {
  return (
    <section id="home">
      <MediaQuery minWidth={700}>
        <ReactPlayer
          className="react-player "
          url="/videos/movie1.mp4"
          width="100vw"
          height="100vw"
          controls={false}
          loop={true}
          playing={true}
          muted={true}
        />
      </MediaQuery>
      <MediaQuery maxWidth={700}>
        <h2 className="mobile-title">LEIBERMAN GLASS</h2>
        <ReactPlayer
          className="react-player "
          url="/videos/movie.mp4"
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
