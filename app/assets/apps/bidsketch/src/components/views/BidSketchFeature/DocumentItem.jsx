import React, { Component } from "react";

import "./css/DocumentItem.css";

export default class DocumentItem extends Component {
    render() {
        const { icon, isActive, isDisabled } = this.props;

        let isActiveClass = isActive ? "document-is-active" : "";
        let isDisabledClass = isDisabled ? "document-is-disabled" : "";

        return (
      <div className={`document-container ${isActiveClass} ${isDisabledClass}`}>
        {icon}
      </div>
        );
    }
}
