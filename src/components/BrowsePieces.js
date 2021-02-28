
import WorkNav from "./WorkNav";
import Ocotillow from '../peices/Ocotillow'
import Lanterns from '../peices/Lanterns'
import Peapods from '../peices/Peapods'
import Main from '../containers/Main'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
export default function BrowsePieces() {
  return (
    <Router>
      <div className="container">
         <svg onClick={() => window.location.href = "http://localhost:3000/"} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
        <WorkNav></WorkNav>
        
        <Switch>
       
        <Route exact path="/work" component={Ocotillow}/>
      <Route exact path="/lanterns" component={Lanterns}/>
      <Route exact path="/peapods" component={Peapods}/>
      {/* <Route exact path="/work" component={BrowsePieces}/> */}
  
   
   
   
    </Switch>
    
        {/* <div className="image-container">
          <img
            onMouseOver={(e) => (e.currentTarget.src = red2)}
            className="catalog-image"
            src={red}
            onMouseOut={(e) => (e.currentTarget.src = red)}
          ></img>
        </div>
        <div className="image-container">
          <img
            onMouseOver={(e) => (e.currentTarget.src = blue2)}
            className="catalog-image"
            src={blue1}
            onMouseOut={(e) => (e.currentTarget.src = blue1)}
          ></img>
          <p>BLUE</p>
        </div> */}
      </div>
    </Router>
  );
}
