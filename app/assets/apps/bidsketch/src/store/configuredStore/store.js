import createHistory from "history/createHashHistory";
import configureStore from "../configureStore";

export const store = configureStore();
export const history = createHistory();