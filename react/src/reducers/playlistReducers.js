import {PLAYLIST_PREFIX} from '../actionTypes/prefixes';
import {SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILURE} from '../actionTypes/actionTypes';
import INITIAL_STATE from './initialState';

export const playlistFetchReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case `${PLAYLIST_PREFIX}${SEARCH_START}`:
      return {
        ...state,
        isLoading: true,
      };
    case `${PLAYLIST_PREFIX}${SEARCH_SUCCESS}`:
      return {
        ...state,
        isLoading: false,
        data: action.payload.playlists.items,

      }
    case `${PLAYLIST_PREFIX}${SEARCH_FAILURE}`:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default: return state;
  }
}
