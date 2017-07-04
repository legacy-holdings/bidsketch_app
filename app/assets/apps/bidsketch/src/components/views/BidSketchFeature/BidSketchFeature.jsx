import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import ChevronLeft from "material-ui/svg-icons/navigation/chevron-left";
import IconButton from "material-ui/IconButton";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgress from "material-ui/CircularProgress";

import * as bidSketchFeatureActions
  from "../../../actions/bidsketch-feature-actions.js";

import ProgressBarStepper
  from "./common/ProgressBarStepper/ProgressBarStepper.jsx";

import $ from "jquery";

import DocumentItem from "./DocumentItem.jsx";
import DocumentItemsCarousel from "./DocumentItemsCarousel.jsx";

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
            progressBarStepCount: 0,
            showClickToStartBtn: true,
            documentItems: [
                <DocumentItem isActive={false} isDisabled={true} />,
                <DocumentItem isActive={false} isDisabled={true} />,
                <DocumentItem isActive={false} isDisabled={true} />,
                <DocumentItem isActive={false} isDisabled={true} />,
                <DocumentItem isActive={false} isDisabled={true} />,
                <DocumentItem isActive={false} isDisabled={true} />
            ],
            documentItemsCarousel: false,
            viewLoading: true,
            activeDocument: undefined // undefined - until "Click to START" btn triggered, integer - represents which document is currently active
        };

        this.loadingView = undefined;
        this.optimizeForMobile();
    }

  // Changes state to build view with document items carousel
    optimizeForMobile() {
        this.loadingView = setInterval(() => {
            if ($(window).width() < 770) {
                this.setState(
                    {
                        viewLoading: true
                    },
          () => {
              clearTimeout(this.loadingView);
              this.loadingView = undefined;
              this.setState(
                  {
                      documentItems: [
                          <DocumentItem isActive={false} isDisabled={false} />,
                          <DocumentItem isActive={false} isDisabled={false} />,
                          <DocumentItem isActive={false} isDisabled={false} />,
                          <DocumentItem isActive={false} isDisabled={false} />,
                          <DocumentItem isActive={false} isDisabled={false} />,
                          <DocumentItem isActive={false} isDisabled={false} />
                      ],
                      documentItemsCarousel: true
                  },
              () => {
                  setTimeout(() => {
                      this.setState({
                          viewLoading: false
                      });
                  }, 500);
              }
            );
          }
        );
            } else {
                this.setState(
                    {
                        viewLoading: true
                    },
          () => {
              clearTimeout(this.loadingView);
              this.loadingView = undefined;
              this.setState(
                  {
                      documentItems: [
                          <DocumentItem isActive={false} isDisabled={false} />,
                          <DocumentItem isActive={false} isDisabled={false} />,
                          <DocumentItem isActive={false} isDisabled={false} />,
                          <DocumentItem isActive={false} isDisabled={false} />,
                          <DocumentItem isActive={false} isDisabled={false} />,
                          <DocumentItem isActive={false} isDisabled={false} />
                      ],
                      documentItemsCarousel: false
                  },
              () => {
                  setTimeout(() => {
                      this.setState({
                          viewLoading: false
                      });
                  }, 500);
              }
            );
          }
        );
            }
        }, 1000);
    }

    handleClickStart() {
        this.setState({
            showClickToStartBtn: false
        });
    }

    render() {
        const { state } = this.props;

        let clickToStartBtn = this.state.showClickToStartBtn
      ? <RaisedButton
          backgroundColor="#0d626d"
          className="bidsketch-btn"
          onClick={() => this.handleClickStart()}
        >
          <div className="document-nav-btn-text">Click to Start</div>
        </RaisedButton>
      : <div />;

        let overlayClass = "";
        if (this.state.showClickToStartBtn) {
      // Disable document
      // Create css dimmer out overlay
            overlayClass = "disabled-overlay";
        } else {
            overlayClass = "overlay-container";

            this.state.documentItems = [
                <DocumentItem isDisabled={false} />,
                <DocumentItem isDisabled={false} />,
                <DocumentItem isDisabled={false} />,
                <DocumentItem isDisabled={false} />,
                <DocumentItem isDisabled={false} />,
                <DocumentItem isDisabled={false} />
            ];
        }

        let documentItemsView = this.state.documentItemsCarousel
      ? <DocumentItemsCarousel documents={this.state.documentItems} />
      : this.state.documentItems.map(document => {
          return document;
      });

        let documentBuilderView = this.state.viewLoading
      ? <div>
          <Col xs={12} style={{ textAlign: "center", marginTop: 50 }}>
            <h4>Loading</h4>
            <CircularProgress size={100} thickness={5} color="#0d626d" />
          </Col>
        </div>
      : <div>
          <ProgressBarStepper step={this.state.progressBarStepCount} />
          <Col xs={12} sm={2} md={2} lg={2} className="document-pages-column">
            {documentItemsView}
          </Col>
          <Col xs={12} sm={10} md={10} lg={10} className="center">
            Text
          </Col>
        </div>;

        return (
      <Grid fluid>
        <Row className="nav">
          <NavLink to="/">
            <IconButton
              tooltip="Back to Home"
              tooltipPosition="right" // Works how I believe looks best, but produces warning.
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
              {clickToStartBtn}
            </div>
          </Col>
        </Row>
        <div className={overlayClass}>
          <Row className={`document-builder-container ${overlayClass}`}>
            {documentBuilderView}
          </Row>
        </div>
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
