
import './App.css';
import React, { useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import BrowsePieces from './components/BrowsePieces';
import Main from './containers/Main';
import ReactDOM from 'react-dom'
import ScrollSnap from 'scroll-snap'
import logo from './images/logo.png'

// import blue from '../images/glass/IMG_7240.JPG'

function callback() {
  console.log('snapped')
}
function App() {
 const container = React.createRef()

  const bindScrollSnap = () => {
    const element = container.current
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: '90%',
    })

    snapElement.bind(callback)
  }

  useEffect(() => {
   bindScrollSnap()
  }, [])
  return (
  <Router>
    <div ref={container} className="container">
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/work" component={BrowsePieces}/>
  
   
   
   
    </Switch>
    
    
    
    <footer> 
     
      <span><img className="logo" src={logo}></img>
      <p>Leiberman Glass</p></span>
      <div>Awards & Recogniton
        <p> <img className="logo" src="https://www.festivals.com/img/festivals/0002547_0005270_a8Ye72a.jpg"></img> BAM Arts Festival Best in Show 3x</p>
        <p> - </p>
      </div>
      <p>P.O. Box 1086 <br></br>Langley, WA <br></br> 98260</p>
     
  
    </footer>
    
    </div>
    </Router>
    
  );
}

export default App;
