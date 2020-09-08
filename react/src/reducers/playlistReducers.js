import {PLAYLIST_PREFIX} from '../actionTypes/prefixes';
import {SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILURE} from '../actionTypes/actionTypes';
import INITIAL_STATE from './initialState';

export const playlistFetchReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case `${PLAYLIST_PREFIX}${SEARCH_START}`:
      return {
        ...state,
        playlist: {
          isLoading: true,
        }
      };
    case `${PLAYLIST_PREFIX}${SEARCH_SUCCESS}`:
      return {
        ...state,
        playlist: {
          isLoading: false,
          data: action.payload,
        }
      }
    case `${PLAYLIST_PREFIX}${SEARCH_FAILURE}`:
      return {
        ...state,
        playlist: {
          isLoading: false,
          error: action.payload,
        }
      }
    default: return state;
  }
}
