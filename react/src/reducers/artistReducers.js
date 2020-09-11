import {ARTIST_PREFIX} from '../actionTypes/prefixes';
import {SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILURE} from '../actionTypes/actionTypes';
import INITIAL_STATE from './initialState';

export const artistFetchReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case `${ARTIST_PREFIX}${SEARCH_START}`:
      return {
        ...state,
        isLoading: true,
      };
    case `${ARTIST_PREFIX}${SEARCH_SUCCESS}`:
      return {
        ...state,
        isLoading: false,
        data: action.payload.artists.items,
      }
    case `${ARTIST_PREFIX}${SEARCH_FAILURE}`:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default: return state;
  }
}
