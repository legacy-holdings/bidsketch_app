import configureStore from '../configureStore';
import createHistory from 'history/createHashHistory';

export const store = configureStore();
export const history = createHistory();