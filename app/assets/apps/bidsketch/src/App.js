import React, { Component } from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Grid } from "react-bootstrap";

import Home from "./components/views/Home/Home";
import BidSketchFeature from "./components/views/BidSketchFeature/BidSketchFeature";
import NotFound from "./components/views/NotFound/NotFound";
import User from "./components/views/User/User";

class App extends Component {
    componentDidMount() {}

    render() {
        return (
      <HashRouter>
        <MuiThemeProvider>
          <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/bidsketch-feature" component={BidSketchFeature} />
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
