import {ACTIONS} from './constants';


export const app = (app = {connected: false}, {type}) => {
  switch (type) {
    case ACTIONS.CONNECT: {
      return {...app, connected: true};
    }
    case ACTIONS.DISCONNECT: {
      return {...app, connected: false};
    }
    default: {
      return app;
    }
  }
};

export const play = (play = {}, {type, ...params}) => {
  console.warn('ACTION:', type, params);

  switch (type) {
    default: {
      return play;
    }
  }
};
