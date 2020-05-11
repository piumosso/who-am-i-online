import {ACTIONS} from './constants';


export const app = (app = {
  connected: false,
  inProgress: false,
  playerId: null,
  notFound: false
}, {type, ...params}) => {
  switch (type) {
    case ACTIONS.CONNECT: {
      return {...app, connected: true};
    }
    case ACTIONS.DISCONNECT: {
      return {...app, connected: false};
    }
    case ACTIONS.IN_PROGRESS: {
      return {...app, inProgress: true};
    }
    case ACTIONS.SUCCESS: {
      return {...app, inProgress: false};
    }
    case ACTIONS.CREATE_PLAYER: {
      return {...app, playerId: params.playerId};
    }
    case ACTIONS.GAME_CREATED:
    case ACTIONS.FETCH_GAME: {
      return {...app, notFound: false};
    }
    case ACTIONS.NOT_FOUND: {
      return {...app, notFound: true};
    }
    default: {
      return app;
    }
  }
};

export const game = (game = null, {type, ...params}) => {
  switch (type) {
    case ACTIONS.GAME_CREATED: {
      return params.game;
    }
    case ACTIONS.GAME_UPDATED: {
      // Предохранитель
      if (game && params.game.id !== game.id) {
        return game
      }
      return params.game;
    }
    default: {
      return game;
    }
  }
};
