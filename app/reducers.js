import {ACTIONS} from './constants';

export const pages = (page = {}, {type, ...params}) => {
  switch (type) {
    case ACTIONS.FETCH_PAGE: {
      const {key} = params;
      return {...page, [key]: {status: 'pending'}};
    }
    case ACTIONS.FETCH_PAGE_SUCCESS: {
      const {key, content} = params;
      return {...page, [key]: {status: 'ok', content}};
    }
    case ACTIONS.FETCH_PAGE_FAILURE: {
      const {key} = params;
      return {...page, [key]: {status: 'failure'}};
    }
    default: {
      return page;
    }
  }
};

export const compositions = (compositions = {}) => {
  return compositions;
};
