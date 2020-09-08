import {ALBUM_PREFIX} from '../actionTypes/prefixes';
import {SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILURE} from '../actionTypes/actionTypes';
import INITIAL_STATE from './initialState';

export const albumFetchReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case `${ALBUM_PREFIX}${SEARCH_START}`:
      return {
        ...state,
        album: {
          isLoading: true
        }
      };
    case `${ALBUM_PREFIX}${SEARCH_SUCCESS}`:
      return {
        ...state,
        album: {
          isLoading: false,
          data: action.payload,
        }
      }
    case `${ALBUM_PREFIX}${SEARCH_FAILURE}`:
      return {
        ...state,
        album: {
          isLoading: false,
          error: action.payload,
        }
      }
    default: return state;
  }
}
