import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import NavDrawer from "../../common/NavDrawer/NavDrawer.jsx";

import "./css/User.css";

export default class User extends Component {
    render() {
        return (
      <div>
        <NavDrawer />
        <Grid>
          <Row>
            <Col xs={6} xsOffset={3} className="user-container">
              <h1>User</h1>
            </Col>
          </Row>
        </Grid>
      </div>
        );
    }
}
