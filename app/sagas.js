import {takeEvery, put} from 'redux-saga/effects';
import {ACTIONS} from './constants';
import {inProgress, success} from './actions';
import {socket} from './socket';


function* inProgressSaga() {
  yield put(inProgress());
  socket.emit('createGame');
}


function* successSaga() {
  yield put(success());
}


export default function* rootSaga() {
  yield takeEvery(ACTIONS.CREATE_GAME, inProgressSaga);
  yield takeEvery(ACTIONS.GAME_CREATED, successSaga);
}
