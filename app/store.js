import {createStore, combineReducers} from 'redux';
import {play, app} from './reducers'


export const store = createStore(
  combineReducers({play, app}),
  window.__STATE__ || {},
);
