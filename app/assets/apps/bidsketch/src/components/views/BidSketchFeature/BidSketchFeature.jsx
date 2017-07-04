import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import ChevronLeft from "material-ui/svg-icons/navigation/chevron-left";
import IconButton from "material-ui/IconButton";
import RaisedButton from "material-ui/RaisedButton";

import * as bidSketchFeatureActions
  from "../../../actions/bidsketch-feature-actions.js";

import ProgressBarStepper
  from "./common/ProgressBarStepper/ProgressBarStepper.jsx";

import "./css/BidSketchFeature.css";

// Icon/Button Styles --------------------------
const chevronLeftIconButtonStyle = {
    marginLeft: 25,
    marginTop: 6
};
const chevronLeftIconStyle = {
    width: 50,
    height: 50,
    marginLeft: -14,
    marginTop: -14
};
// ---------------------------------------------

// Helper Styles -------------------------------
const backToHomeStyle = {
    marginLeft: 25,
    marginTop: -10
};
// ---------------------------------------------

class BidSketchFeature extends Component {
    constructor() {
        super();
        this.state = {
            documentNavText: "Review & Complete document",
            progressBarStepCount: 0
        };
    }
    componentDidMount() {
        console.log(this);
        setTimeout(() => {
            this.setState({
                progressBarStepCount: 8
            });
        }, 3000);
    }

    render() {
        const { state } = this.props;

        return (
      <Grid>
        <Row className="nav">
          <NavLink to="/">
            <IconButton
              tooltip="Back to Home"
              tooltipPosition="right"
              tooltipStyles={backToHomeStyle}
              iconStyle={chevronLeftIconStyle}
              style={chevronLeftIconButtonStyle}
            >
              <ChevronLeft color="#0d626d" />
            </IconButton>
          </NavLink>
        </Row>
        <Row className="document-nav">
          <div className="document-nav-text">
            {this.state.documentNavText}
          </div>
          <Col xs={4} xsOffset={4} className="center">
            <div className="document-nav-click-start-btn-container">
              <RaisedButton backgroundColor="#0d626d" className="bidsketch-btn">
                <div className="document-nav-btn-text">Click to Start</div>
              </RaisedButton>
            </div>
          </Col>
        </Row>
        <Row className="document-builder-container">
          <ProgressBarStepper step={this.state.progressBarStepCount} />
        </Row>
      </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: {
            bidSketchFeatureData: state.bidSketchFeatureReducer
        }
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
      Object.assign({}, bidSketchFeatureActions),
      dispatch
    )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BidSketchFeature);
