// Copyright 2017 VS Networks LLC, All Rights Reserved.
// VS Networks CONFIDENTIAL

import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";

import bidSketchFeatureReducer from "./bidSketchFeatureReducer";

const rootReducer = combineReducers({
    routing,
    bidSketchFeatureReducer
});

export default rootReducer;