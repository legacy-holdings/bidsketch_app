import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import createHistory from "history/createHashHistory";
import rootReducer from "../reducers";

const hashHistory = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(hashHistory);


export default function configureStore(initialState, history) {
    const createStoreWithMiddleware = applyMiddleware(thunk, middleware)(createStore);
    const store = createStoreWithMiddleware(
        rootReducer,
        initialState);
    return store;
}