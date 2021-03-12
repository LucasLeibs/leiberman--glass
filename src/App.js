import "./App.css";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Catalog from "./components/Catalog";
import Contact from "./components/Contact";
import BrowsePieces from "./components/BrowsePieces";
import Main from "./containers/Main";
import ReactDOM from "react-dom";
import ScrollSnap from "scroll-snap";
import logo from "./images/logo.png";
import MediaQuery from "react-responsive";
// import blue from '../images/glass/IMG_7240.JPG'

function callback() {
  console.log("snapped");
}
function App() {
  const container = React.createRef();

  const bindScrollSnap = () => {
    const element = container.current;
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: "90%",
    });

    snapElement.bind(callback);
  };

  useEffect(() => {
    bindScrollSnap();
  }, []);
  return (
    <Router>
      <div ref={container} className="container">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/work" component={BrowsePieces} />
        </Switch>

        <MediaQuery minWidth={700}>
          <footer>
            <span>
              <p>
                Leiberman Glass LLC.
                <p>
                  P.O. Box 1086 <br></br>Langley, WA <br></br> 98260
                </p>
              </p>
            </span>
            <div className="award-container">
              <p> AWARDS & RECOGNITION</p>
              <div className="awards">
                <div className="award">
                  <img
                    className="logo"
                    src="https://www.festivals.com/img/festivals/0002547_0005270_a8Ye72a.jpg"
                  ></img>
                  <p>
                    <a
                      href="https://www.bellevuearts.org/artsfair"
                      target="_blank"
                    >
                      BAM Arts Festival
                    </a>
                    <br></br> Best in Show 2x Bellevue, WA
                  </p>
                </div>
                <div className="award">
                  <img
                    className="logo"
                    src="https://www.parkcitygalleryassociation.com/wp-content/uploads/2018/07/pcga-kaf-2018-781x512.png"
                  ></img>
                  <p>
                    <a
                      href="https://kimballartcenter.org/event/park-city-kimball-arts-festival/?gclid=Cj0KCQiAyoeCBhCTARIsAOfpKxjciKUT0dX2NaIP9CUveH8oG754pnY3rA4y-s0_yFkDmei3O1MKx9saArddEALw_wcB"
                      target="_blank"
                    >
                      Kimball Arts Festival
                    </a>
                    <br></br> Best in Show Park City, UT
                  </p>
                </div>
                <div className="award">
                  <img
                    className="logo"
                    src="https://happyllamainc.com/wp-content/uploads//2015/11/ccaf-logo-portfolio.jpg"
                  ></img>
                  <p>
                    <a
                      href="https://cherrycreekartsfestival.org/"
                      target="_blank"
                    >
                      Cherry Creek Arts Festival
                    </a>
                    <br></br> Best in Glass Denver, CO
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </MediaQuery>
        <MediaQuery maxWidth={700}>
          <footer className="footer-mobile">
            <span>
              <p>
                Leiberman Glass<br></br>P.O. Box 1086 <br></br>Langley, WA{" "}
                <br></br> 98260
              </p>
            </span>
            <div>
              <Link to="/work">Work</Link>
              <Link to="/">Home</Link>
            </div>
          </footer>
        </MediaQuery>
      </div>
    </Router>
  );
}

export default App;
