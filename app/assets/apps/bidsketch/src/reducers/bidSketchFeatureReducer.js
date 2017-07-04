import initialState from "./initialState.js";
import * as types from "../action-types/action-types.js";

export default function bidSketchFeatureReducer(
  state = initialState.bidSketchFeature,
  action
) {
  console.log(action.payload);
  switch (action.type) {
    case types.CLICKED_START:
      return {
        ...state,
        clickedStart: true
      };

    case types.CLICKED_FIRST_CHECKBOX:
      return {
        ...state,
        clickedFirstCheckbox: true
      };

    case types.CLICKED_SECOND_CHECKBOX:
      return {
        ...state,
        clickedSecondCheckbox: true
      };

    case types.CLICKED_COMPLETE:
      return {
        ...state,
        clickedComplete: true
      };

    default:
      return state;
  }
}
