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
  
      <ScrollToTop>
        <MediaQuery minWidth={1270}>
      <div className="container">
         
        <WorkNav></WorkNav> 
        
        <Switch>
       
       
  
   
   
   
    </Switch>
      </div>
      </MediaQuery>
      <MediaQuery maxWidth={1269}>
      <div className="container">
        
        <WorkNav></WorkNav>
        
        <Switch>
       
   
    </Switch>
      </div>
      </MediaQuery>
      </ScrollToTop>
  
  );
}
