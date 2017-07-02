import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Row } from "react-bootstrap";

import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import { List, ListItem } from "material-ui/List";
import ArrowForward from "material-ui/svg-icons/navigation/arrow-forward";
import Avatar from "material-ui/Avatar";
import Divider from "material-ui/Divider";
import Home from "material-ui/svg-icons/action/home";

import NavBar from "./NavBar.jsx";

export default class NavDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <NavBar menuClicked={() => this.handleToggle()} />
        <Drawer
          docked={false}
          width={260}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <NavLink to="/user" className="nav-list-item">
            <ListItem
              onTouchTap={this.handleClose}
              primaryText="User Name"
              leftAvatar={
                <Avatar
                  style={{ background: "black" }}
                  src={require("./logo.svg")}
                />
              }
            />
          </NavLink>
          <Divider />
          <List>
            <NavLink to="/" className="nav-list-item">
              <ListItem
                onTouchTap={this.handleClose}
                primaryText="Home"
                leftIcon={<Home />}
              />
            </NavLink>
            <NavLink to="/bidsketch-feature" className="nav-list-item">
              <ListItem
                onTouchTap={this.handleClose}
                primaryText="Bidsketch Feature"
                leftIcon={<ArrowForward />}
              />
            </NavLink>
          </List>
          <Divider />
        </Drawer>
      </div>
    );
  }
}
