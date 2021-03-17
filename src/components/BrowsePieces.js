import ScrollToTop from "./ScrollToTop"
import {useState} from 'react'
import WorkNav from "./WorkNav";
import Ocotillow from '../peices/Ocotillow'
import Lanterns from '../peices/Lanterns'
import Peapods from '../peices/Peapods'
import Main from '../containers/Main'
import Acrons from '../peices/Acrons'
import Urchins from '../peices/Urchins'
import MediaQuery from 'react-responsive'
import { useLocation } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

export default function BrowsePieces() {
  
 const { path } = useLocation()
  return (
    <Router>
      <ScrollToTop>
        <MediaQuery minWidth={700}>
      <div className="container">
         <svg id="arrow" onClick={() => window.location.href = "https://master.d3evk3sp1ak1p2.amplifyapp.com/"} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
        <WorkNav></WorkNav> 
        
        <Switch>
       
        <Route exact path="/work" component={Urchins} />
      <Route exact path="/lanterns" component={Lanterns}/>
      <Route exact path="/peapods" component={Peapods}/>
      <Route exact path="/ocotillo" component={Ocotillow}/>
      <Route exact path="/acorns" component={Acrons}/>
      {/* <Route exact path="/work" component={BrowsePieces}/> */}
  
   
   
   
    </Switch>
      </div>
      </MediaQuery>
      <MediaQuery maxWidth={700}>
      <div className="container">
        
        <WorkNav></WorkNav>
        
        <Switch>
       
        <Route exact path="/work" component={Urchins}/>
      <Route exact path="/lanterns" component={Lanterns}/>
      <Route exact path="/peapods" component={Peapods}/>
      <Route exact path="/ocotillo" component={Ocotillow}/>
      <Route exact path="/acorns" component={Acrons}/>
      {/* <Route exact path="/work" component={BrowsePieces}/> */}
  
   
   
   
    </Switch>
      </div>
      </MediaQuery>
      </ScrollToTop>
    </Router>
  );
}
