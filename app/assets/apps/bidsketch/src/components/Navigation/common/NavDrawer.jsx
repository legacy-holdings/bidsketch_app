import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Row } from "react-bootstrap";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import { List, ListItem } from "material-ui/List";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import ActionGrade from "material-ui/svg-icons/action/grade";
import ContentSend from "material-ui/svg-icons/content/send";
import ArrowForward from "material-ui/svg-icons/navigation/arrow-forward";
import ContentDrafts from "material-ui/svg-icons/content/drafts";
import Avatar from "material-ui/Avatar";
import Divider from "material-ui/Divider";
import ActionInfo from "material-ui/svg-icons/action/info";

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
          {/*<MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>*/}
          {/*<MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>*/}
          <NavLink to="/user">
            {/*<ListItem*/}
              {/*onTouchTap={this.handleClose}*/}
              {/*primaryText="John the Baptist"*/}
              {/*leftAvatar={*/}
                {/*<Avatar
                  style={{ background: "black" }}
                  src={require("../../../../logo.svg")}
                />*/}
              {/*}*/}
            {/*/>*/}
          </NavLink>
          <List>
            <NavLink to="/">
              <ListItem
                onTouchTap={this.handleClose}
                primaryText="Home"
                leftIcon={<ArrowForward />}
              />
            </NavLink>
            <ListItem
              onTouchTap={this.handleClose}
              primaryText="Starred"
              leftIcon={<ActionGrade />}
            />
            <ListItem
              onTouchTap={this.handleClose}
              primaryText="Sent mail"
              leftIcon={<ContentSend />}
            />
            <ListItem
              onTouchTap={this.handleClose}
              primaryText="Drafts"
              leftIcon={<ContentDrafts />}
            />
            <ListItem
              onTouchTap={this.handleClose}
              primaryText="Inbox"
              leftIcon={<ContentInbox />}
            />
          </List>
          <Divider />
          <List>
            <ListItem
              onTouchTap={this.handleClose}
              primaryText="All mail"
              rightIcon={<ActionInfo />}
            />
            <ListItem
              onTouchTap={this.handleClose}
              primaryText="Trash"
              rightIcon={<ActionInfo />}
            />
            <ListItem
              onTouchTap={this.handleClose}
              primaryText="Spam"
              rightIcon={<ActionInfo />}
            />
            <ListItem
              onTouchTap={this.handleClose}
              primaryText="Follow up"
              rightIcon={<ActionInfo />}
            />
          </List>
        </Drawer>
      </div>
    );
  }
}