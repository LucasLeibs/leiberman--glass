import React, { useState } from "react";
import ReactPlayer from "react-player";
import acornspread from "../images/acorns/acronspread.jpg";
import green from "../images/acorns/green.jpg";
import red from "../images/acorns/red.jpg";
import olive from "../images/acorns/olive.jpg";
import autumn from "../images/acorns/pink.jpg";
import MediaQuery from "react-responsive";
export default function Acrons() {
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
    <section>
      <MediaQuery minWidth={1270}>
        <div className="gallery">
          <figure className="gallery__item-2-acorns">
            <img
              src={acornspread}
              id="contain"
              className="contain"
              alt="Image 1"
            />
          </figure>
         
          <figure className="gallery__item-3-acorns">
            <img src={autumn} className="contain" alt="Image 1" />
            <p>Aurora</p>
          </figure>
          <figure className="gallery__item-4-acorns">
            <img src={olive} className="contain" alt="Image 1" />
            <p>Olive</p>
          </figure>

          <figure className="gallery__item-5-acorns">
            <img src={green} className="contain" alt="Image 1" />
            <p>Citron</p>
          </figure>

          <figure className="gallery__item-6-acorns">
            <img src={red} className="contain" alt="Image 1" />
            <p>Cranberry</p>
          <div className="colorspread">
            <p>Colors not pictured</p>
            <div>
            <p>Amethyst<span></span></p>
            <p>Aqua<span id="blue-picker"></span></p>
            <p>Amber<span id="amber"></span></p>
            </div>
          </div>
          </figure>

          <div className="ocotillo-desc">
            <h2>ACORN PAPERWEIGHTS</h2>
            <p>
              The acorn is known as a symbol of prosperity and good luck.
              These jewel tone paperwights make a beautiful accent for any home
              or office.
            </p>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={1269}>
        <div className="gallery-mobile">
          <figure className="gallery__item-2-acorns-mobile">
            <img
              src={acornspread}
              id="contain"
              className="contain"
              alt="Image 1"
            />
          </figure>
          
          <figure className="gallery__item-3-acorns-mobile">
            {state.img1 ? (
              <div onClick={() => setModal({ img1: !state.img1 })} className="modal">
                {x1}

                <img className="modal-img" src={autumn}></img>
              </div>
            ) : (
              ""
            )}
            <img src={autumn} className="contain" alt="Image 1" />
            <svg
              onClick={() => setModal({ img1: !state.img1 })}
              id="img1"
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
            <p>Aurora</p>
          </figure>

          {/* FIGURE 2 */}
          <figure className="gallery__item-4-acorns-mobile">
            {state.img2 ? (
              <div  onClick={() => setModal({ img2: !state.img2 })} className="modal">
                {x2}

                <img className="modal-img" src={olive}></img>
              </div>
            ) : (
              ""
            )}
            <img src={olive} className="contain" alt="Image 1" />
            <svg
              onClick={() => setModal({ img2: !state.img2 })}
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
            <p>Olive</p>
          </figure>

          {/* FIGURE 3 */}
          <figure className="gallery__item-5-acorns-mobile">
            {state.img3 ? (
              <div  onClick={() => setModal({ img3: !state.img3 })} className="modal">
                {x3}

                <img className="modal-img" src={green}></img>
              </div>
            ) : (
              ""
            )}
            <img src={green} className="contain" alt="Image 1" />
            <svg
              onClick={() => setModal({ img3: !state.img3 })}
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
            <p>Citron</p>
          </figure>

          {/* FIGURE 4 */}
          <figure className="gallery__item-6-acorns-mobile">
            {state.img4 ? (
              <div onClick={() => setModal({ img4: !state.img4 })} className="modal">
                {x4}

                <img className="modal-img" src={red}></img>
              </div>
            ) : (
              ""
            )}
            <img src={red} className="contain" alt="Image 1" />
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
            <p>Cranberry</p>
            <br></br>
            <div className="colorspread">
            <p>Colors not pictured</p>
            <div>
            <p>Amethyst<span></span></p>
            <p>Aqua<span id="blue-picker"></span></p>
            <p>Amber<span id="amber"></span></p>
            </div>
          </div>
          </figure>
          <figure className="gallery__item-acorn-arrow">
            
          </figure>

          <div className="ocotillo-desc-mobile">
            <h2>ACORN PAPERWEIGHTS</h2>
            <p>
              The acorn is known as a symbol of prosperity and good luck.
              These jewel tone paperwights make a beautiful accent for any home
              or office.
            </p>
          </div>
        </div>
      </MediaQuery>
    </section>
  );
}
