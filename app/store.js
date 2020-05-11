import {createStore, combineReducers, applyMiddleware} from 'redux';
import {game, app} from './reducers';
import {connect, disconnect, gameCreated} from './actions';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import {socket} from './socket';


const sagaMiddleware = createSagaMiddleware();


export const store = createStore(
  combineReducers({game, app}),
  {},
  applyMiddleware(sagaMiddleware)
);


sagaMiddleware.run(rootSaga);


socket.on('connect', () => store.dispatch(connect()));
socket.on('disconnect', () => store.dispatch(disconnect()));
socket.on('gameCreated', (game) => store.dispatch(gameCreated({game})));
