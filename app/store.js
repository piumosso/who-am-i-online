import {createStore, combineReducers, applyMiddleware} from 'redux';
import {pages, compositions} from './reducers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();


export const store = createStore(
  combineReducers({pages, compositions}),
  window.__STATE__ || {},
  applyMiddleware(sagaMiddleware)
);


sagaMiddleware.run(rootSaga);
