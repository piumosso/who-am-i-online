import {ACTIONS} from './constants';


export const fetchPage = key => ({
  type: ACTIONS.FETCH_PAGE,
  key
});


export const fetchPageSuccess = (key, content) => ({
  type: ACTIONS.FETCH_PAGE_SUCCESS,
  key,
  content
});


export const fetchPageFailure = key => ({
  type: ACTIONS.FETCH_PAGE_FAILURE,
  key
});
