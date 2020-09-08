import {TRACK_PREFIX} from '../actionTypes/prefixes';
import {SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILURE} from '../actionTypes/actionTypes';
import INITIAL_STATE from './initialState';

export const trackFetchReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case `${TRACK_PREFIX}${SEARCH_START}`:
      return {
        ...state,
        track: {
          isLoading: true,
        }
      };
    case `${TRACK_PREFIX}${SEARCH_SUCCESS}`:
      return {
        ...state,
        track: {
          isLoading: false,
          data: action.payload,
        }
      }
    case `${TRACK_PREFIX}${SEARCH_FAILURE}`:
      return {
        ...state,
        track: {
          isLoading: false,
          error: action.payload,
        }
      }
    default: return state;
  }
}
