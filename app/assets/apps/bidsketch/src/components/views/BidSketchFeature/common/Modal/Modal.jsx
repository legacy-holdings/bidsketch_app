import React, { Component } from "react";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import { store } from "../../../../../store/configuredStore/store.js";

export default class Modal extends Component {
    constructor() {
        super();
        this.state = {
            open: true,
        };
    }

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Ok"
        primary={true}
        disabled={false}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Your all done!"
          actions={actions}
          modal={true}
          style={{textAlign: "center"}}
          open={this.state.open}
        />
      </div>
    );
  }
}
