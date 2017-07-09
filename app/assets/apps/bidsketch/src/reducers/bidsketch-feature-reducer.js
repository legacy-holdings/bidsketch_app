import initialState from "./initial-state.js";
import * as types from "../action-types/action-types.js";

export default function bidSketchFeatureReducer(
  state = initialState.bidSketchFeature,
  action
) {
  switch (action.type) {
    // Progression ------------------------------------------------------------
    case types.CLICKED_START:
      return {
        ...state,
        clickedStart: action.payload
      };

    case types.CLICKED_REVIEW:
      return {
        ...state,
        clickedReview: action.payload
      }
    
    case types.CLICKED_COMPLETE:
      return {
        ...state,
        clickedComplete: action.payload
      }
    
    // Checkbox types ---------------------------------------------------------
    case types.CHECKED_DO_YOU_LIKE_REACT:
      return {
        ...state,
        checkedDoYouLikeReact: action.payload
      };

    case types.UNCHECKED_DO_YOU_LIKE_REACT:
      return {
        ...state,
        checkedDoYouLikeReact: action.payload
      };

    case types.CHECKED_WHAT_ABOUT_GO:
      return {
        ...state,
        checkedWhatAboutGo: action.payload
      };

    case types.UNCHECKED_WHAT_ABOUT_GO:
      return {
        ...state,
        checkedWhatAboutGo: action.payload
      };

    case types.CHECKED_PIZZA:
      return {
        ...state,
        checkedPizza: action.payload
      }
    
    case types.UNCHECKED_PIZZA:
      return {
        ...state,
        checkedPizza: action.payload
      }

    case types.CHECKED_SUSHI:
      return {
        ...state,
        checkedSushi: action.payload
      };
    
    case types.UNCHECKED_SUSHI:
      return {
        ...state,
        checkedSushi: action.payload
      };

    case types.CHECKED_PING_PONG:
      return {
        ...state,
        checkedPingPong: action.payload
      }

    case types.UNCHECKED_PING_PONG:
      return {
        ...state,
        checkedPingPong: action.payload
      }

    case types.CHECKED_HOCKEY:
      return {
        ...state,
        checkedHockey: action.payload
      }

    case types.UNCHECKED_HOCKEY:
      return {
        ...state,
        checkedHockey: action.payload
      }

    case types.CHECKED_RUNNING:
      return {
        ...state,
        checkedRunning: action.payload
      }
    
    case types.UNCHECKED_RUNNING:
      return {
        ...state,
        checkedRunning: action.payload
      }
    
    case types.CHECKED_HIKING:
      return {
        ...state,
        checkedHiking: action.payload
      }

    case types.UNCHECKED_HIKING:
      return {
        ...state,
        checkedHiking: action.payload
      }

    case types.CHECKED_FISHING:
      return {
        ...state,
        checkedFishing: action.payload
      }
    
    case types.UNCHECKED_FISHING:
      return {
        ...state,
        checkedFishing: action.payload
      }
    
    case types.CHECKED_HUNTING:
      return {
        ...state,
        checkedHunting: action.payload
      }
    
    case types.UNCHECKED_HUNTING:
      return {
        ...state,
        checkedHunting: action.payload
      }

    case types.CHECKED_SCUBA_DIVING:
      return {
        ...state,
        checkedScubaDiving: action.payload
      }

    case types.UNCHECKED_SCUBA_DIVING:
      return {
        ...state,
        checkedScubaDiving: action.payload
      }

    case types.CHECKED_JETPACKING:
      return {
        ...state,
        checkedJetPacking: action.payload
      }
    
    case types.UNCHECKED_JETPACKING:
      return {
        ...state,
        checkedJetPacking: action.payload
      }
    
    // Checkbox pages ---------------------------------------------------------
    case types.ACTIVE_DOCUMENT_COUNT:
      return {
        ...state,
        activeDocumentCount: action.payload
      }
    
    // Progress Bar Count -----------------------------------------------------
    case types.PROGRESS_BAR_COUNT:
      return {
        ...state,
        progressBarCount: action.payload
      }
    
    default:
      return state;
  }
}
