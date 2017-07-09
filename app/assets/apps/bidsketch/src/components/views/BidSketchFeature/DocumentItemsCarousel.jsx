import React, { Component } from "react";
import Slider from "react-slick";

import DocumentItem from "./DocumentItem.jsx";
import HiddenElement from "./HiddenElement.jsx";
import * as bidSketchFeatureActions
  from "../../../actions/bidsketch-feature-actions.js";


class DocumentItemsCarousel extends Component {
    componentDidMount() {
        setInterval(() => {
            this.nextDocument();      
        }, 100);
    }

    nextDocument() {
        if (this.props.nextDocument) {
            this.refs.slider.slickGoTo(this.props.activeDocument - 1);        
        }
    }

    render() {
        const { documents } = this.props;
        const settings = {
            className: "center",
            centerMode: true,
            centerPadding: "10px",
            slidesToShow: 3,
            speed: 100,
            nextArrow: <HiddenElement />,
            prevArrow: <HiddenElement />,
            swipeToSlide: false,
            swipe: false,
            touchMove: false
        };

        return (
            <Slider ref="slider" {...settings}>
                {documents.map((doc, i) => {
                    return (
                      <div key={`doc-${i}`}>
                        <div>{doc}</div>
                      </div>
                    );
                })}
            </Slider>
        );
    }
}

export default DocumentItemsCarousel;
