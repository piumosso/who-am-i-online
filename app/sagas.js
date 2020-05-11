import {takeEvery, put, call} from 'redux-saga/effects';
import {ACTIONS} from './constants';
import {createPlayer, inProgress, notFound, success} from './actions';
import {socket} from './socket';
import {wait} from './utils';


function* createGameSaga() {
  yield put(inProgress());
  socket.emit('createGame');
}


function* fetchGameSaga({gameId}) {
  yield put(inProgress());
  socket.emit('fetchGame', gameId);
}


function* checkGameSaga({game}) {
  if (!game) {
    yield put(notFound());
  }
}


function* successSaga() {
  yield call(wait, 100);
  yield put(success());
}


function* createPlayerSaga({game}) {
  yield put(createPlayer({playerId: game.players[0].id}));
}


function* createPersonSaga({name, person, gameId, playerId}) {
  yield put(inProgress());
  socket.emit('createPerson', {name, person, gameId, playerId});
}


function* startGameSaga({gameId}) {
  yield put(inProgress());
  socket.emit('startGame', gameId);
}


function* finishPlayerSaga({gameId, playerId}) {
  yield put(inProgress());
  socket.emit('finishPlayer', {gameId, playerId});
}


export default function* rootSaga() {
  yield takeEvery(ACTIONS.CREATE_GAME, createGameSaga);
  yield takeEvery(ACTIONS.GAME_CREATED, successSaga);
  yield takeEvery(ACTIONS.GAME_CREATED, createPlayerSaga);

  yield takeEvery(ACTIONS.FETCH_GAME, fetchGameSaga);
  yield takeEvery(ACTIONS.GAME_UPDATED, checkGameSaga);
  yield takeEvery(ACTIONS.GAME_UPDATED, successSaga);

  yield takeEvery(ACTIONS.CREATE_PERSON, createPersonSaga);
  yield takeEvery(ACTIONS.START_GAME, startGameSaga);
  yield takeEvery(ACTIONS.FINISH_PLAYER, finishPlayerSaga);
}
