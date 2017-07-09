import * as types from "../action-types/action-types.js";

// Progression ----------------------------------------------------------------
export const clickedStart = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.CLICKED_START,
                    payload: true
                })
            );
        });
    };
};

export const clickedReview = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.CLICKED_REVIEW,
                    payload: true
                })
            );
        });
    };
};

export const clickedComplete = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.CLICKED_COMPLETE,
                    payload: true
                })
            );
        });
    };
};

// Checkbox types ------------------------------------------------------------------
export const checkedDoYouLikeReact = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.CHECKED_DO_YOU_LIKE_REACT,
                    payload: true
                })
            );
        });
    };
};

export const uncheckedDoYouLikeReact = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.UNCHECKED_DO_YOU_LIKE_REACT,
                    payload: false
                })
            );
        });
    };
};

export const checkedWhatAboutGo = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.CHECKED_WHAT_ABOUT_GO,
                    payload: true
                })
            );
        });
    };
};

export const uncheckedWhatAboutGo = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.UNCHECKED_WHAT_ABOUT_GO,
                    payload: false
                })
            );
        });
    };
};

export const checkedPizza = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.CHECKED_PIZZA,
                    payload: true
                })
            );
        });
    };
};

export const uncheckedPizza = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.UNCHECKED_PIZZA,
                    payload: false
                })
            );
        });
    };
};


export const checkedSushi = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.CHECKED_SUSHI,
                    payload: true
                })
            );
        });
    };
};

export const uncheckedSushi = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.UNCHECKED_SUSHI,
                    payload: false
                })
            );
        });
    };
};

export const checkedPingPong = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.CHECKED_PING_PONG,
                    payload: true
                })
            );
        });
    };
};

export const uncheckedPingPong = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.UNCHECKED_PING_PONG,
                    payload: false
                })
            );
        });
    };
};

export const checkedHockey = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.CHECKED_HOCKEY,
                    payload: true
                })
            );
        });
    };
};

export const uncheckedHockey = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.UNCHECKED_HOCKEY,
                    payload: false
                })
            );
        });
    };
};

export const checkedHiking = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.CHECKED_HIKING,
                    payload: true
                })
            );
        });
    };
};

export const uncheckedHiking = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.UNCHECKED_HIKING,
                    payload: false
                })
            );
        });
    };
};

export const checkedRunning = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.CHECKED_RUNNING,
                    payload: true
                })
            );
        });
    };
};

export const uncheckedRunning = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.UNCHECKED_RUNNING,
                    payload: false
                })
            );
        });
    };
};

export const checkedFishing = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.CHECKED_FISHING,
                    payload: true
                })
            );
        });
    };
};

export const uncheckedFishing = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.UNCHECKED_FISHING,
                    payload: false
                })
            );
        });
    };
};

export const checkedHunting = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.CHECKED_HUNTING,
                    payload: true
                })
            );
        });
    };
};

export const uncheckedHunting = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.UNCHECKED_HUNTING,
                    payload: false
                })
            );
        });
    };
};

export const checkedScubaDiving = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.CHECKED_SCUBA_DIVING,
                    payload: true
                })
            );
        });
    };
};

export const uncheckedScubaDiving = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.UNCHECKED_SCUBA_DIVING,
                    payload: false
                })
            );
        });
    };
};

export const checkedJetPacking = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.CHECKED_JETPACKING,
                    payload: true
                })
            );
        });
    };
};

export const uncheckedJetPacking = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.UNCHECKED_JETPACKING,
                    payload: false
                })
            );
        });
    };
};


// Checkbox page count -------------------------------------------------------------
export const activeDocumentCount = (pageNum) => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.ACTIVE_DOCUMENT_COUNT,
                    payload: pageNum
                })
            );
        });
    };
}; 


// Progress bar count ---------------------------------------------------------
export const progressBarCount = (level) => {
    return (dispatch) => {
        return new Promise((resolve) => {
            resolve(
                dispatch({
                    type: types.PROGRESS_BAR_COUNT,
                    payload: level
                })
            );
        });
    };
}; 
