// Global Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid, Row, Col, Tooltip } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import $ from "jquery";

// Material UI Imports
import ChevronLeft from "material-ui/svg-icons/navigation/chevron-left";
import ChevronRight from "material-ui/svg-icons/navigation/chevron-right";
import IconButton from "material-ui/IconButton";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgress from "material-ui/CircularProgress";
import Checkbox from 'material-ui/Checkbox';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

// Local Imports
import * as bidSketchFeatureActions
  from "../../../actions/bidsketch-feature-actions.js";
import ProgressBarStepper
  from "./common/ProgressBarStepper/ProgressBarStepper.jsx";
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

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
class CompletedDialog extends Component {
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
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Only actions can close this dialog.
        </Dialog>
      </div>
    );
  }
}

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
            ],
            documentItemsCarousel: false,
            viewLoading: true,
            activeDocument: undefined, // undefined - until "Click to START" btn triggered, integer - represents which document is currently active,
            reactChecked: undefined,
            goChecked: undefined,
            completedDialogView: ""
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

    handleReactCheck() {
        if (!this.state.reactChecked) {
            this.setState({
                reactChecked: true
            });
        } else {
            this.setState({
                reactChecked: false
            });
        }
    }

    handleGoCheck() {
        if (!this.state.goChecked) {
            this.setState({
                goChecked: true
            });
        } else {
            this.setState({
                goChecked: false
            });
        }
    }
    
    handleCompleteClick() {
        this.setState({
            completedDialogView: <CompletedDialog />
        })
    }

    render() {
        const { state } = this.props;

        let clickToStartBtn = this.state.showClickToStartBtn
      ? <RaisedButton
          backgroundColor="#0d626d"
          className="bidsketch-btn"
          onClick={() => this.handleClickStart()}
        >
          <div className="document-nav-btn-text">Click to START</div>
        </RaisedButton>
      : <div />;

        let overlayClass = "";
        let disableFirstCheckBox = true;
        let disableSecondCheckBox = true;
        let disableCompleteButton = true;
        let firstCheckBoxTooltip = "";
        let secondCheckBoxTooltip = "";
        let firstCheckBoxClass = "";
        let secondCheckBoxClass = "";
        
        
        if (this.state.showClickToStartBtn) {
            overlayClass = "disabled-overlay";
            
        } else {
            overlayClass = "overlay-container";
            disableFirstCheckBox = false;
            disableSecondCheckBox = false;
            disableCompleteButton = false;

            if (this.state.reactChecked === undefined) {
                firstCheckBoxTooltip = <div id="fade-first-checkbox">
                                <Tooltip placement="top" className="in" id="click-to-check-first-tooltip">
                                    Click to CHECK
                                </Tooltip>
                            </div>;    
                firstCheckBoxClass = "first-checkbox";                
            }

            if (this.state.goChecked === undefined) {
                secondCheckBoxTooltip = <div id="fade-second-checkbox">
                            <Tooltip placement="bottom" className="in" id="click-to-check-second-tooltip">
                                Click to CHECK
                            </Tooltip>
                        </div>;           
                secondCheckBoxClass = "second-checkbox";
            }

            this.state.documentItems = [
                <DocumentItem isDisabled={false} />,
                <DocumentItem isDisabled={false} />,
                <DocumentItem isDisabled={false} />,
                <DocumentItem isDisabled={false} />,
                <DocumentItem isDisabled={false} />,
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
          <Col xs={12} sm={10} md={10} lg={10} className="checkbox-form-container center">
            <Row className="checkbox-row">
                <Col xs={8} xsOffset={2} sm={4} smOffset={4} md={4} mdOffset={4}>
                    {firstCheckBoxTooltip}
                    <Checkbox
                        onCheck={() => this.handleReactCheck()}
                        className={firstCheckBoxClass}
                        label="Do you like React?"
                        disabled={disableFirstCheckBox}
                    />
                </Col>
            </Row>
            <Row className="checkbox-row">
                <Col xs={8} xsOffset={2} sm={4} smOffset={4} md={4} mdOffset={4}>
                    {secondCheckBoxTooltip}
                    <Checkbox
                        onCheck={() => this.handleGoCheck()}
                        className={secondCheckBoxClass}                        
                        label="What about Go?"
                        disabled={disableSecondCheckBox}
                    />
                </Col>
            </Row>
            <Row className="checkbox-row">
                <Col xs={8} xsOffset={2} sm={4} smOffset={4} md={4} mdOffset={4}>
                        {this.state.completedDialogView}
                        <RaisedButton
                            onClick={() => this.handleCompleteClick()}
                            style={{ marginLeft: "60px", marginTop: "50px"  }}
                            labelPosition="before"
                            primary={true}
                            disabled={disableCompleteButton}
                            label="Complete"
                            icon={<ChevronRight />}
                        />
                </Col>
            </Row>
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
        {/* Animate pages: https://github.com/szchenghuang/react-transitions#transitions */}
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
