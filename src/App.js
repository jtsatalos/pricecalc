import React from "react";
import asphalt from "./asphalt.js";
import concrete from "./concrete.js";
// import concrete2 from "./concrete2.js";
import "./db.js";
// import math;
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
  // Redirect
} from "react-router-dom";
import "./App.css";
import { createBrowserHistory } from "history";

export default class App extends React.Component {
  render() {
    // console.log(munhide);
    // const BrowserHistory = require("react-router/lib/BrowserHistory").default;
    const history = createBrowserHistory();

    return (
      <Router history={history}>
        <div className="headings">
          <NavLink to="/">
            <h2>Ergeon Pricing</h2>
          </NavLink>
          <br></br>
          {/* <img></img> */}
          {/* <table className="ploop">
            <thead>
              <tr>
                <th className="fun">
                  <NavLink to="/concrete" exact={true} id="thebutts">
                    Concrete
                  </NavLink>
                </th>
                <th className="fun">
                  <NavLink to="/asphalt">Asphalt</NavLink>
                </th>
              </tr>
            </thead>
          </table> */}
        </div>
        <br></br>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/concrete" exact={true} component={concrete} />
          {/* <Route path="/concrete2" exact={true} component={concrete2} /> */}

          <Route path="/asphalt" component={asphalt} />
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div class="center" id="homePage">
        <table className="ploop">
          <thead>
            <tr className="donkey">
              <th className="fun">
                <NavLink to="/concrete" exact={true} id="thebutts">
                  <b>Concrete</b>
                </NavLink>
              </th>
            </tr>
            <tr className="donkey">
              <th className="fun">
                <NavLink to="/asphalt">
                  <b>Asphalt</b>
                </NavLink>
              </th>
            </tr>
          </thead>
        </table>
        {/* <div></div>
        <NavLink to="/concrete" exact={true} id="thebutts">
          <h1>Concrete</h1>
        </NavLink>
        <div></div>
        <NavLink to="/asphalt">
          <h1>Asphalt</h1>
        </NavLink> */}
      </div>
    );
  }
}

class NotFound extends React.Component {
  render() {
    return (
      <span style={{ color: "red" }}>
        This pathway has no results. Please correct.
      </span>
    );
  }
}
