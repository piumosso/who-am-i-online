import {ACTIONS} from './constants';


export const connect = () => ({
  type: ACTIONS.CONNECT,
});
export const disconnect = () => ({
  type: ACTIONS.DISCONNECT,
});


export const inProgress = () => ({
  type: ACTIONS.IN_PROGRESS,
});
export const success = () => ({
  type: ACTIONS.SUCCESS,
});
export const notFound = () => ({
  type: ACTIONS.NOT_FOUND,
});


export const createGame = () => ({
  type: ACTIONS.CREATE_GAME,
});
export const gameCreated = ({game}) => ({
  type: ACTIONS.GAME_CREATED,
  game
});
export const fetchGame = ({gameId}) => ({
  type: ACTIONS.FETCH_GAME,
  gameId
});
export const gameUpdated = ({game}) => ({
  type: ACTIONS.GAME_UPDATED,
  game
});


export const createPlayer = ({playerId}) => ({
  type: ACTIONS.CREATE_PLAYER,
  playerId
});
export const createPerson = ({name, person, gameId, playerId}) => ({
  type: ACTIONS.CREATE_PERSON,
  name,
  person,
  gameId,
  playerId
});
export const startGame = ({gameId}) => ({
  type: ACTIONS.START_GAME,
  gameId
});
export const finishPlayer = ({gameId, playerId}) => ({
  type: ACTIONS.FINISH_PLAYER,
  gameId,
  playerId
});

