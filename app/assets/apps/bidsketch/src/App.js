import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Grid } from "react-bootstrap";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";
import { Provider } from "react-redux";

import Home from "./components/views/Home/Home";
import BidSketchFeature from "./components/views/BidSketchFeature/BidSketchFeature";
import NotFound from "./components/views/NotFound/NotFound";
import User from "./components/views/User/User";

import { store, history } from "./store/configuredStore/store";


class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider>
              <div>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route
                    path="/bidsketch-feature"
                    component={BidSketchFeature}
                  />
                  <Route path="/user" component={User} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </MuiThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
