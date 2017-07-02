import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import NavDrawer from "../../common/NavDrawer/NavDrawer.jsx";

import "./css/Home.css";

export default class Home extends Component {
    render() {
        return (
      <div>
        <NavDrawer />
        <Grid>
          <Row>
            <Col xs={6} xsOffset={3} className="home-container">
              <h1>Home</h1>
            </Col>
          </Row>
        </Grid>
      </div>
        );
    }
}
