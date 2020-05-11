import {ACTIONS} from './constants';


export const app = (app = {connected: false, inProgress: false}, {type}) => {
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
    default: {
      return app;
    }
  }
};

export const game = (play = null, {type, ...params}) => {
  console.warn('ACTION:', type, params);

  switch (type) {
    case ACTIONS.GAME_CREATED: {
      return params.game;
    }
    default: {
      return play;
    }
  }
};
