import logo from './logo.svg';
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
    
    
    
    
    </div>
    </Router>
    
  );
}

export default App;
