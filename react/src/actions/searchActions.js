import { SET_SEARCH_INFO } from '../actionTypes/actionTypes';

export const setSearchInfo = (queryValues, type, limit) => ({
  type: SET_SEARCH_INFO, 
  payload: {
    queryValues,
    type,
    limit,
  }  
})