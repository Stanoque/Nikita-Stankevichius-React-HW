import {ARTIST_PREFIX} from '../actionTypes/prefixes';
import {SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILURE} from '../actionTypes/actionTypes';
import INITIAL_STATE from './initialState';

export const artistFetchReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case `${ARTIST_PREFIX}${SEARCH_START}`:
      return {
        ...state,
        artist: {
          isLoading: true,
        }
      };
    case `${ARTIST_PREFIX}${SEARCH_SUCCESS}`:
      return {
        ...state,
        artist: {
          isLoading: false,
          data: action.payload,
        }
      }
    case `${ARTIST_PREFIX}${SEARCH_FAILURE}`:
      return {
        ...state,
        artist: {
          isLoading: false,
          error: action.payload,
        }
      }
    default: return state;
  }
}
