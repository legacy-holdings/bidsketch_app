import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import NavDrawer from "../../common/NavDrawer/NavDrawer.jsx";

import "./css/NotFound.css";

export default class NotFound extends Component {
    render() {
        return (
      <div>
        <NavDrawer />
        <Grid>
          <Row>
            <Col xs={6} xsOffset={3} className="not-found-container">
              <h1>404 Error - Not Found</h1>
            </Col>
          </Row>
        </Grid>
      </div>
        );
    }
}
