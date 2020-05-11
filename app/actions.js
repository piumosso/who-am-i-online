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


