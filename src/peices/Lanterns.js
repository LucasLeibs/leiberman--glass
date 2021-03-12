import React from "react";
import lantern from "../images/glass/IMG_7171.JPG";
import lantern2 from "../images/glass/IMG_7172.JPG";

import MediaQuery from "react-responsive";

export default function Lanterns() {
  return (
    <section>
      <MediaQuery minWidth={700}>
        <div className="gallery">
          <figure className="gallery__item-1-lantern">
            <img src={lantern} className="contain" alt="Image 1" />
            <p>Red/Orange</p>
          </figure>
          <figure className="gallery__item-2-lantern">
            <img src={lantern2} className="contain" alt="Image 1" />
          </figure>

          <div className="ocotillo-desc">
            <h2>JAPANESE LANTERNS</h2>
            <p>
              Inspired by the delicate paper-like seed pods of the Japanese
              Lantern plant. <br></br>
              Colors not shown: Amber/Olive
            </p>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={700}>
        <div className="gallery-mobile">
          <figure className="gallery__item-1-lantern-mobile">
            <img src={lantern} className="contain" alt="Image 1" />
            <p>Red/Orangee</p>
          </figure>
          <figure className="gallery__item-2-lantern-mobile">
            <img src={lantern2} className="contain" alt="Image 1" />
            <p>Colors not shown: Amber/Olive</p>
          </figure>

          <div className="ocotillo-desc-mobile">
            <h2>JAPANESE LANTERNS</h2>
            <p>
              Inspired by the delicate paper-like seed pods of the Japanese
              Lantern plant. <br></br>
            </p>
          </div>
        </div>
      </MediaQuery>
    </section>
  );
}
