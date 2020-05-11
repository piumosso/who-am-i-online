import {takeEvery, put} from 'redux-saga/effects';
import {ACTIONS} from './constants';
import {createPlayer, inProgress, success} from './actions';
import {socket} from './socket';


function* createGameSaga() {
  yield put(inProgress());
  socket.emit('createGame');
}


function* fetchGameSaga({gameId}) {
  yield put(inProgress());
  socket.emit('fetchGame', gameId);
}


function* successSaga() {
  yield put(success());
}


function* createPlayerSaga({game}) {
  yield put(createPlayer({playerId: game.players[0].id}));
}


export default function* rootSaga() {
  yield takeEvery(ACTIONS.CREATE_GAME, createGameSaga);
  yield takeEvery(ACTIONS.GAME_CREATED, successSaga);
  yield takeEvery(ACTIONS.GAME_CREATED, createPlayerSaga);

  yield takeEvery(ACTIONS.FETCH_GAME, fetchGameSaga);
  yield takeEvery(ACTIONS.GAME_UPDATED, successSaga);

}
