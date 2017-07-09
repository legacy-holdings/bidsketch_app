import { compose, createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import { autoRehydrate } from "redux-persist";
import createHistory from "history/createHashHistory";
import rootReducer from "../reducers";

const hashHistory = createHistory();
const middleware = routerMiddleware(hashHistory);

export default function configureStore(initialState, history) {
    const createStoreWithMiddleware = compose(applyMiddleware(thunk, middleware), autoRehydrate())(createStore);
    // const createStoreWithMiddleware = applyMiddleware(thunk, middleware)(createStore);
    const store = createStoreWithMiddleware(
        rootReducer,
        initialState);
    return store;
    // return persistStore(store, { storage: localForage });
}