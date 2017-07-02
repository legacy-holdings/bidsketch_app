import React, { Component } from "react";
import { HashRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Grid } from "react-bootstrap";

import Home from "./components/views/Home/Home";
import BidSketchFlow from "./components/views/BidSketchFlow/BidSketchFlow";
import NotFound from "./components/views/NotFound/NotFound";
import User from "./components/views/User/User";

import Navigation from "./components/Navigation/Navigation";

class App extends Component {
    componentDidMount() {}

    render() {
        return (
      <HashRouter>
        <MuiThemeProvider>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/bidsketch-flow" component={BidSketchFlow} />
              <Route path="/user" component={User}/>
              <Route component={NotFound} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </HashRouter>
        );
    }
}

export default App;
