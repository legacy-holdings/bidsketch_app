import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import "./css/User.css";

export default class User extends Component {
    render() {
        return (
      <Grid>
        <Row>
          <Col xs={6} xsOffset={3} className="user-container">
            <h1>User</h1>
          </Col>
        </Row>
      </Grid>
        );
    }
}
