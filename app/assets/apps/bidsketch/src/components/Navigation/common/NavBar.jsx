import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import AccountCircle from "material-ui/svg-icons/action/account-circle";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import Menu from "material-ui/svg-icons/navigation/menu";
import "./Navbar.css";

export default class NavBar extends Component {
    render() {
        return (
      <div>
        <Row>
          <AppBar
            title={
              <NavLink to="/">
                <img
                  className="aaws-logo"
                  style={{ height: 30, width: 120, marginTop: 16 }}
                  src={require("./images/bidsketch.png")}
                />
              </NavLink>
            }
            style={{ background: "white", width: "100%" }}
            iconElementLeft={
              <IconButton
                onClick={this.props.menuClicked}
                style={{ marginLeft: 5 }}
              >
                <Menu color="black" />
              </IconButton>
            }
            iconElementRight={
              <NavLink to="/user" style={{ marginRight: 5 }}>
                <IconButton>
                  <AccountCircle color="black" />
                </IconButton>
              </NavLink>
            }
          />
        </Row>
      </div>
        );
    }
}
