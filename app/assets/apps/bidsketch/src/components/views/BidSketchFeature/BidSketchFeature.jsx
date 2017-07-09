// Global Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid, Row, Col, Tooltip } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import jsxToString from "jsx-to-string";

// Material UI Imports
import ChevronLeft from "material-ui/svg-icons/navigation/chevron-left";
import ChevronRight from "material-ui/svg-icons/navigation/chevron-right";
import IconButton from "material-ui/IconButton";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgress from "material-ui/CircularProgress";
import Checkbox from "material-ui/Checkbox";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

// Local Imports
import * as bidSketchFeatureActions
  from "../../../actions/bidsketch-feature-actions.js";
import ProgressBarStepper
  from "./common/ProgressBarStepper/ProgressBarStepper.jsx";
import DocumentItem from "./DocumentItem.jsx";
import DocumentItemsCarousel from "./DocumentItemsCarousel.jsx";
import Modal from "./common/Modal/Modal.jsx";
import "./css/BidSketchFeature.css";
import initialState from "../../../reducers/initial-state.js";

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
            disableClickToStartBtn: true,
            documentItems: [
                <DocumentItem isActive={true}  isDisabled={true} />,
                <DocumentItem isActive={false} isDisabled={true} />,
                <DocumentItem isActive={false} isDisabled={true} />,
                <DocumentItem isActive={false} isDisabled={true} />,
                <DocumentItem isActive={false} isDisabled={true} />,
                <DocumentItem isActive={false} isDisabled={true} />          
            ],
            viewLoading: true,
            activeDocument: 1,
            reactChecked: false,
            goChecked: false,
            pizzaChecked: false,
            sushiChecked: false,
            pingPongChecked: false,
            hockeyChecked: false,
            hikingChecked: false,
            runningChecked: false,
            fishingChecked: false,
            huntingChecked: false,
            scubaDivingChecked: false,
            jetPackingChecked: false,
            showReviewModal: false,
            completedDialogView: "",
            actionButtonLabel: "Next",
            showClickToStartBtn: true,            
            showDocumentsItemsCarousel: false,            
            showProgressBar: false,
            showCheckBoxSection: false,
            documentChanged: false,
            actionButtonFunction: () => this.handleActionButtonClick()
        };

        // Load view based on screen size
        this.loadingView = undefined;
        this.optimizeForMobile();
    }

    componentDidMount() {
        // Check redux store for current state and update component 
        // ...if state does not equal initial state
        const actionsStateMap = Object.freeze({
            clickedStart: this.handleStartClick.bind(this), 
            clickedComplete: this.handleCompleteClick.bind(this),
            checkedDoYouLikeReact: this.handleCheckedDoYouLikeReact.bind(this),
            checkedWhatAboutGo: this.handleCheckedWhatAboutGo.bind(this),
            checkedPizza: this.handleCheckedPizza.bind(this),
            checkedSushi: this.handleCheckedSushi.bind(this),
            checkedPingPong: this.handleCheckedPingPong.bind(this),
            checkedHockey: this.handleCheckedHockey.bind(this),
            checkedRunning: this.handleCheckedRunning.bind(this),
            checkedHiking: this.handleCheckedHiking.bind(this),
            checkedFishing: this.handleCheckedFishing.bind(this),
            checkedHunting: this.handleCheckedHunting.bind(this),
            checkedScubaDiving: this.handleCheckedScubaDiving.bind(this),
            checkedJetPacking: this.handleCheckedJetPacking.bind(this),
            progressBarCount: this.handleProgressBarCount.bind(this)
        });

        setTimeout(() => {
            // Set state from redux store if the store is different from the initial state of the store
            if (JSON.stringify(initialState.bidSketchFeature) !== JSON.stringify(this.props.reduxState.bidSketchFeatureData)) {
                for (let val of Object.values(this.props.reduxState.bidSketchFeatureData)) {
                    for (let reduxVal of Object.keys(this.props.reduxState.bidSketchFeatureData)) {
                        if (val) {
                            if (actionsStateMap.hasOwnProperty(reduxVal)) {
                                actionsStateMap[reduxVal]();
                                break;
                            }
                        }            
                    }
                    continue;
                }
            }
        }, 1000);
    }

  // If window.width() is less than 770px change 
  // ... the state to build view with document items carousel
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
                          <DocumentItem isActive={false} isDisabled={true} />,
                          <DocumentItem isActive={false} isDisabled={true} />,
                          <DocumentItem isActive={false} isDisabled={true} />,
                          <DocumentItem isActive={false} isDisabled={true} />,
                          <DocumentItem isActive={false} isDisabled={true} />,
                          <DocumentItem isActive={false} isDisabled={true} />                          
                      ],
                      disableClickToStartBtn: false,
                      showDocumentsItemsCarousel: true
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
                          <DocumentItem isActive={false} isDisabled={true} />,
                          <DocumentItem isActive={false} isDisabled={true} />,
                          <DocumentItem isActive={false} isDisabled={true} />,
                          <DocumentItem isActive={false} isDisabled={true} />,
                          <DocumentItem isActive={false} isDisabled={true} />,
                          <DocumentItem isActive={false} isDisabled={true} />                          
                      ],
                      disableClickToStartBtn: false,
                      showDocumentsItemsCarousel: false,
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
    
    handleStartClick() {
        this.props.actions.clickedStart().then(() => {
            this.setState({
                showClickToStartBtn: false,
                showCheckBoxSection: true
            }, () => {
                this.setState({
                    documentItems: [
                        <DocumentItem isActive={true}  isDisabled={false} />,
                        <DocumentItem isActive={false} isDisabled={false} />,
                        <DocumentItem isActive={false} isDisabled={false} />,
                        <DocumentItem isActive={false} isDisabled={false} />,
                        <DocumentItem isActive={false} isDisabled={false} />,
                        <DocumentItem isActive={false} isDisabled={false} />                                                                       
                    ],
                    showProgressBar: true
                });
            });
        });
    }

    handleCompleteClick() {
        this.setState({
            completedDialogView: <Modal />,
            documentNavText: "Completed!"
        });
    }

    handleCheckedDoYouLikeReact() {
        if (!this.props.reduxState.checkedDoYouLikeReact && !this.state.reactChecked) {        
            this.props.actions.checkedDoYouLikeReact().then(() => {
                this.setState({
                    reactChecked: true
                });
            });                
        } else {
            this.props.actions.uncheckedDoYouLikeReact().then(() => {
                this.setState({
                    reactChecked: false
                });
            });
        };
    }

    handleCheckedWhatAboutGo() {
        if (!this.props.reduxState.checkedWhatAboutGo && !this.state.goChecked) {
            this.props.actions.checkedWhatAboutGo().then(() => {
                this.setState({
                    goChecked: true
                });
            });
        } else {
            this.props.actions.uncheckedWhatAboutGo().then(() => {
                this.setState({
                    goChecked: false
                });
            });
        }
    }

    handleCheckedPizza() {
        if (!this.props.reduxState.checkedPizza && !this.state.pizzaChecked) {
            this.props.actions.checkedPizza().then(() => {
                this.setState({
                    pizzaChecked: true
                });
            });
        } else {
            this.props.actions.uncheckedPizza().then(() => {
                this.setState({
                    pizzaChecked: false
                });
            });
        }
    }
    
    handleCheckedSushi() {
        if (!this.props.reduxState.checkedSushi && !this.state.sushiChecked) {
            this.props.actions.checkedSushi().then(() => {
                this.setState({
                    sushiChecked: true
                });
            });
        } else {
            this.props.actions.uncheckedSushi().then(() => {
                this.setState({
                    sushiChecked: false
                });
            });
        }
    }

    handleCheckedPingPong() {
        if (!this.props.reduxState.checkedPingPong && !this.state.pingPongChecked) {
            this.props.actions.checkedPingPong().then(() => {
                this.setState({
                    pingPongChecked: true
                });
            });
        } else {
            this.props.actions.uncheckedPingPong().then(() => {
                this.setState({
                    pingPongChecked: false
                });
            });
        }
    }

    handleCheckedHockey() {
        if (!this.props.reduxState.checkedHockey && !this.state.hockeyChecked) {
            this.props.actions.checkedHockey().then(() => {
                this.setState({
                    hockeyChecked: true
                });
            });
        } else {
            this.props.actions.uncheckedHockey().then(() => {
                this.setState({
                    hockeyChecked: false
                });
            });
        }
    }

    handleCheckedRunning() {
        if (!this.props.reduxState.checkedRunning && !this.state.runningChecked) {
            this.props.actions.checkedRunning().then(() => {
                this.setState({
                    runningChecked: true
                });
            });
        } else {
            this.props.actions.uncheckedRunning().then(() => {
                this.setState({
                    runningChecked: false
                });
            });
        }
    }

    handleCheckedHiking() {
        if (!this.props.reduxState.checkedHiking && !this.state.hikingChecked) {
            this.props.actions.checkedHiking().then(() => {
                this.setState({
                    hikingChecked: true
                });
            });
        } else {
            this.props.actions.uncheckedHiking().then(() => {
                this.setState({
                    hikingChecked: false
                });
            });
        }
    }

    handleCheckedFishing() {
        if (!this.props.reduxState.checkedFishing && !this.state.fishingChecked) {
            this.props.actions.checkedFishing().then(() => {
                this.setState({
                    fishingChecked: true
                });
            });
        } else {
            this.props.actions.uncheckedFishing().then(() => {
                this.setState({
                    fishingChecked: false
                });
            });
        }
    }

    handleCheckedHunting() {
        if (!this.props.reduxState.checkedHunting && !this.state.huntingChecked) {
            this.props.actions.checkedHunting().then(() => {
                this.setState({
                    huntingChecked: true
                });
            });
        } else {
            this.props.actions.uncheckedHunting().then(() => {
                this.setState({
                    huntingChecked: false
                });
            });
        }
    }

    handleCheckedScubaDiving() {
        if (!this.props.reduxState.checkedScubaDiving && !this.state.scubaDivingChecked) {
            this.props.actions.checkedScubaDiving().then(() => {
                this.setState({
                    scubaDivingChecked: true
                });
            });
        } else {
            this.props.actions.uncheckedScubaDiving().then(() => {
                this.setState({
                    scubaDivingChecked: false
                });
            });
        }
    }

    handleCheckedJetPacking() {
        if (!this.props.reduxState.checkedJetPacking && !this.state.jetPackingChecked) {
            this.props.actions.checkedJetPacking().then(() => {
                this.setState({
                    jetPackingChecked: true
                });
            });
        } else {
            this.props.actions.uncheckedJetPacking().then(() => {
                this.setState({
                    jetPackingChecked: false
                });
            });
        }
    }

    handleProgressBarCount() {
        this.setState({
            progressBarStepCount: this.props.reduxState.bidSketchFeatureData.progressBarCount
        });
    }

    handleActionButtonClick() {      
        this.setState({
            activeDocument: this.state.activeDocument + 1
        }, () => {
            switch(this.state.activeDocument) {
                case 2:
                    this.setState({
                        documentItems: [
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={true}  isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />
                        ],
                        progressBarStepCount: 2,
                        documentChanged: true
                    }, () => {
                        // Allow time for carousel animation
                        this.props.actions.progressBarCount(this.state.progressBarStepCount);
                        setTimeout(() => {
                            this.setState({
                                documentChanged: false                        
                            });
                        }, 200);
                    });
                    break;

                case 3:
                    this.props.actions.progressBarCount(4);
                    this.setState({
                        documentItems: [
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={true}  isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />                            
                        ],
                        progressBarStepCount: 4,
                        documentChanged: true
                    }, () => {
                        this.props.actions.progressBarCount(this.state.progressBarStepCount);                        
                        // Allow time for carousel animation                    
                        setTimeout(() => {
                            this.setState({
                                documentChanged: false
                            });
                        }, 200);
                    });
                    break;

                case 4:
                    this.props.actions.progressBarCount(6);
                    this.setState({
                        documentItems: [
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={true}  isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />                            
                        ],
                        progressBarStepCount: 6,
                        documentChanged: true
                    }, () => {
                        this.props.actions.progressBarCount(this.state.progressBarStepCount);                            
                        // Allow time for carousel animation                                            
                        setTimeout(() => {
                            this.setState({
                                documentChanged: false
                            });
                        }, 200);
                    });
                    break;

                case 5:
                    this.props.actions.progressBarCount(8);
                    this.setState({
                        documentItems: [
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={true}  isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />                            
                        ],
                        progressBarStepCount: 8,
                        documentChanged: true
                    }, () => {
                        this.props.actions.progressBarCount(this.state.progressBarStepCount);                        
                        // Allow time for carousel animation                                            
                        setTimeout(() => {
                            this.setState({
                                documentChanged: false
                            });
                        }, 200);
                    });
                    break;

                case 6:
                    this.props.actions.progressBarCount(10);
                    this.setState({
                        documentItems: [
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={true}  isDisabled={false} />                            
                        ],
                        progressBarStepCount: 10,
                        documentChanged: true,

                    }, () => {
                        this.props.actions.progressBarCount(this.state.progressBarStepCount);                        
                        // Allow time for carousel animation                                                                    
                        setTimeout(() => {
                            this.setState({
                                documentChanged: false
                            });
                        }, 200);
                    });
                    break;

                case 7:
                    this.setState({
                        documentItems: [
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />,
                            <DocumentItem isActive={false} isDisabled={false} />                            
                        ],
                        actionButtonLabel: "Complete",
                        actionButtonFunction: () => this.handleCompleteClick(),
                        progressBarStepCount: 12,
                    }, () => {
                        this.props.actions.progressBarCount(this.state.progressBarStepCount);  
                    });
                    break;
            }
        });
    }

    render() {
        const { reduxState } = this.props;
        let overlayClass, reactCheckBoxClass, reactCheckBoxTooltip, goCheckBoxTooltip, goCheckBoxClass;
        let checkBoxJsx = <div />;        
        let disableReactCheckBox = true;
        let disableGoCheckBox = true;
        let disableActionButton = true;

        console.log(reduxState);
        
        let clickToStartBtnView = this.state.showClickToStartBtn && !reduxState.bidSketchFeatureData.clickedStart
      ? <RaisedButton
          backgroundColor="#0d626d"
          className="bidsketch-btn"
          disabled={this.state.disableClickToStartBtn}
          onClick={() => this.handleStartClick()}
        >
          <div className="document-nav-btn-text">Click to START</div>
        </RaisedButton>
      : <div />;
        
        if (!reduxState.bidSketchFeatureData.clickedStart && this.state.showClickToStartBtn) {
            overlayClass = "disabled-overlay";
        } else {
            overlayClass = "overlay-container";
            disableReactCheckBox = false;
            disableGoCheckBox = false;
            disableActionButton = false;

            if (!this.state.reactChecked && !reduxState.bidSketchFeatureData.checkedDoYouLikeReact) {
                reactCheckBoxTooltip = <div id="fade-first-checkbox">
                                <Tooltip placement="top" className="in" id="click-to-check-first-tooltip">
                                    Click to CHECK
                                </Tooltip>
                            </div>;    
                reactCheckBoxClass = "first-checkbox";                
            }

            if (!this.state.goChecked && !reduxState.bidSketchFeatureData.checkedWhatAboutGo) {
                goCheckBoxTooltip = <div id="fade-second-checkbox">
                            <Tooltip placement="bottom" className="in" id="click-to-check-second-tooltip">
                                Click to CHECK
                            </Tooltip>
                        </div>;           
                goCheckBoxClass = "second-checkbox";
            }
        }

        let documentItemsView = this.state.showDocumentsItemsCarousel
      ? <Col xs={12} sm={12} md={12} lg={8} lgOffset={2} className="document-pages-column">
            <DocumentItemsCarousel documents={this.state.documentItems} nextDocument={this.state.documentChanged} activeDocument={this.state.activeDocument} />
      </Col>
      : <Col xs={12} sm={2} md={2} lg={2} className="document-pages-column">  
            {this.state.documentItems.map(document => {
                return document;
            })}
      </Col>;

      let progressBarStepperView = this.state.showProgressBar ? 
        <ProgressBarStepper step={this.state.progressBarStepCount} /> :
        <div />;
        
        switch(this.state.activeDocument) {
            case 1:
                checkBoxJsx = <div>
            <Row className="checkbox-row">
                <Col xs={8} xsOffset={2} sm={4} smOffset={4} md={4} mdOffset={4}>
                    {reactCheckBoxTooltip}
                    <Checkbox
                        onCheck={() => this.handleCheckedDoYouLikeReact()}
                        className={reactCheckBoxClass}
                        label="Do you like React?"
                        disabled={disableReactCheckBox}
                        checked={reduxState.bidSketchFeatureData.checkedDoYouLikeReact || this.state.reactChecked}
                    />
                </Col>
            </Row>
            <Row className="checkbox-row">
                <Col xs={8} xsOffset={2} sm={4} smOffset={4} md={4} mdOffset={4}>
                    {goCheckBoxTooltip}
                    <Checkbox
                        onCheck={() => this.handleCheckedWhatAboutGo()}
                        className={goCheckBoxClass}                        
                        label="What about Go?"
                        disabled={disableGoCheckBox}
                        checked={reduxState.bidSketchFeatureData.checkedWhatAboutGo || this.state.goChecked}
                    />
                </Col>
            </Row> 
        </div>;
                break;

            case 2:           
                checkBoxJsx = <div>
            <Row className="checkbox-row">
                <Col xs={8} xsOffset={2} sm={4} smOffset={4} md={4} mdOffset={4}>
                    <Checkbox
                        onCheck={() => this.handleCheckedPizza()}
                        label="Pizza?"
                        checked={reduxState.bidSketchFeatureData.checkedPizza || this.state.pizzaChecked}
                        />
                </Col>
            </Row>
            <Row>
                <Col xs={8} xsOffset={2} sm={4} smOffset={4} md={4} mdOffset={4}>
                    <Checkbox
                        onCheck={() => this.handleCheckedSushi()}
                        label="Sushi?"
                        checked={reduxState.bidSketchFeatureData.checkedSushi || this.state.sushiChecked}
                        />
                </Col>
            </Row>
            </div>;
                break;

            case 3:
                checkBoxJsx = <div>
            <Row className="checkbox-row">
                <Col xs={8} xsOffset={2} sm={4} smOffset={4} md={4} mdOffset={4}>
                    <Checkbox
                        onCheck={() => this.handleCheckedPingPong()}
                        label="Ping Pong?"
                        checked={reduxState.bidSketchFeatureData.checkedPingPong || this.state.pingPongChecked}
                        />
                </Col>
            </Row>
            <Row>
                <Col xs={8} xsOffset={2} sm={4} smOffset={4} md={4} mdOffset={4}>
                    <Checkbox
                        onCheck={() => this.handleCheckedHockey()}
                        label="Hockey?"
                        checked={reduxState.bidSketchFeatureData.checkedHockey || this.state.hockeyChecked}
                        />
                </Col>
            </Row>
            </div>;
                break;

            case 4:
                checkBoxJsx = <div>
            <Row className="checkbox-row">
                <Col xs={8} xsOffset={2} sm={4} smOffset={4} md={4} mdOffset={4}>
                    <Checkbox
                        onCheck={() => this.handleCheckedHiking()}
                        label="Hiking?"
                        checked={reduxState.bidSketchFeatureData.checkedHiking || this.state.hikingChecked}
                        />
                </Col>
            </Row>
            <Row>
                <Col xs={8} xsOffset={2} sm={4} smOffset={4} md={4} mdOffset={4}>
                    <Checkbox
                        onCheck={() => this.handleCheckedRunning()}
                        label="Running?"
                        checked={reduxState.bidSketchFeatureData.checkedRunning || this.state.runningChecked}
                        />
                </Col>
            </Row>
            </div>;
                break;

            case 5:
                checkBoxJsx = <div>
            <Row className="checkbox-row">
                <Col xs={8} xsOffset={2} sm={4} smOffset={4} md={4} mdOffset={4}>
                    <Checkbox
                        onCheck={() => this.handleCheckedFishing()}
                        label="Fishing?"
                        checked={reduxState.bidSketchFeatureData.checkedFishing || this.state.fishingChecked}
                        />
                </Col>
            </Row>
            <Row>
                <Col xs={8} xsOffset={2} sm={4} smOffset={4} md={4} mdOffset={4}>
                    <Checkbox
                        onCheck={() => this.handleCheckedHunting()}
                        label="Hunting?"
                        checked={reduxState.bidSketchFeatureData.checkedHunting || this.state.huntingChecked}
                        />
                </Col>
            </Row>
            </div>;
                break;

            case 6:
                checkBoxJsx = <div>
            <Row className="checkbox-row">
                <Col xs={8} xsOffset={2} sm={4} smOffset={4} md={4} mdOffset={4}>
                    <Checkbox
                        onCheck={() => this.handleCheckedScubaDiving()}
                        label="Scuba Diving?"
                        checked={reduxState.bidSketchFeatureData.checkedScubaDiving || this.state.scubaDivingChecked}
                        />
                </Col>
            </Row>
            <Row>
                <Col xs={8} xsOffset={2} sm={4} smOffset={4} md={4} mdOffset={4}>
                    <Checkbox
                        onCheck={() => this.handleCheckedJetPacking()}
                        label="Jet Packing?"
                        checked={reduxState.bidSketchFeatureData.checkedJetPacking || this.state.jetPackingChecked}
                        />
                </Col>
            </Row>
            </div>;
                break;

        }

        let checkBoxSectionView = this.state.showCheckBoxSection ?
      <div>{checkBoxJsx}</div> :
            <div />;

        let documentBuilderView = this.state.viewLoading
      ? <div>
          <Col xs={12} style={{ textAlign: "center", marginTop: 50 }}>
            <h4>Loading</h4>
            <CircularProgress size={100} thickness={5} color="#0d626d" />
          </Col>
        </div>
      : <div>
          {progressBarStepperView}
          {documentItemsView}
          <Col xs={12} sm={10} md={10} lg={10} className="checkbox-form-container center">
          {checkBoxSectionView}
            <Row className="checkbox-row">
                <Col xs={8} xsOffset={2} sm={4} smOffset={4} md={4} mdOffset={4}>
                        {this.state.completedDialogView}
                        <RaisedButton
                            onClick={this.state.actionButtonFunction}
                            style={{ marginLeft: "60px", marginTop: "50px"  }}
                            labelPosition="before"
                            primary={true}
                            disabled={disableActionButton}
                            label={this.state.actionButtonLabel}
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
          <Col xs={12} className="center">
            <div className="document-nav-click-start-btn-container">
              {clickToStartBtnView}
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
        reduxState: {
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
