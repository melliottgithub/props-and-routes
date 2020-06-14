import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";
import Contact from "./components/Contact";
import Us from "./components/Us";
import InitialPage from "./components/InitialPage";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Initial
          </Link>
          <Link to="/us" className="btn btn-dark">
            Us
          </Link>
          <NavLink to="/contact" className="btn btn-dark" activeClassName='active'>
            Contact
          </NavLink>
        </div>
       
        <hr />
        <Switch>
          <Route exact path="/">
            <InitialPage></InitialPage>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/us">
            <Us></Us>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
