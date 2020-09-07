import { TRACK_PREFIX } from '../actionTypes/prefixes';
import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILURE } from '../actionTypes/actionTypes';
import { fetchSearchResults } from '../services/spotifyAPI';
import {search_endpoint} from '../constants/userCredentials';

export const fetchTracks = (queryValues, type, tokenType, accessToken, limit, offset) => {
  return dispatch => {
    dispatch(fetchTracksStarted());
    fetchSearchResults(queryValues, type, search_endpoint, tokenType, accessToken, fetchTracksSuccess, fetchTracksFailure, dispatch, limit, offset)
  }
}

const fetchTracksStarted = () => ({
  type: `${TRACK_PREFIX}${SEARCH_START}`,
})

const fetchTracksSuccess = (data) => ({
  type: `${TRACK_PREFIX}${SEARCH_SUCCESS}`,
  payload: data,
})

const fetchTracksFailure = (error) => ({
  type: `${TRACK_PREFIX}${SEARCH_FAILURE}`,
  payload: error,
})