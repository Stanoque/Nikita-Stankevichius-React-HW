import { SET_SEARCH_INFO } from '../actionTypes/actionTypes';

export const searchInfoReducer = (state = {}, action) => {
  switch(action.type) {
    case SET_SEARCH_INFO:
      return {
        ...state,
        ...action.payload
      }
  }
}