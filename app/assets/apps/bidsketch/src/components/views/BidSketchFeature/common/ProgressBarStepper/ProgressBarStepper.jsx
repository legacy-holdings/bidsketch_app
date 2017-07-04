import React from "react";
import LinearProgress from "material-ui/LinearProgress";

import "./css/ProgressBarStepper.css";

export default class LinearProgressExampleDeterminate extends React.Component {
    render() {
        const { step } = this.props;

        let stepValText = "";

        switch (step) {
            case 0:
                stepValText = "0 / 12";
                break;
            case 2:
                stepValText = "2 / 12";
                break;
            case 4:
                stepValText = "4 / 12";
                break;
            case 6:
                stepValText = "6 / 12";
                break;
            case 8:
                stepValText = "8 / 12";
                break;
            case 10:
                stepValText = "10 / 12";
                break;
            case 12:
                stepValText = "12 / 12";
                break;
        }

        return (
      <div>
        <LinearProgress mode="determinate" value={step} min={0} max={12} className="linear-progress-bar" />
        <div className="lin-progress-step-text">{stepValText}</div>
      </div>
        );
    }
}
