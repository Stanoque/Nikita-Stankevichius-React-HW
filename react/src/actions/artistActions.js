import { ARTIST_PREFIX } from '../actionTypes/prefixes';
import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILURE } from '../actionTypes/actionTypes';
import { fetchSearchResults } from '../services/spotifyAPI';
import {search_endpoint} from '../constants/userCredentials';

export const fetchArtists = (queryValues, type, tokenType, accessToken, limit, offset) => {
  return dispatch => {
    dispatch(fetchArtistsStarted());
    fetchSearchResults(queryValues, type, search_endpoint, tokenType, accessToken, fetchArtistsSuccess, fetchArtistsFailure, dispatch, limit, offset)
  }
}

const fetchArtistsStarted = () => ({
  type: `${ARTIST_PREFIX}${SEARCH_START}`,
})

const fetchArtistsSuccess = (data) => ({
  type: `${ARTIST_PREFIX}${SEARCH_SUCCESS}`,
  payload: data,
})

const fetchArtistsFailure = (error) => ({
  type: `${ARTIST_PREFIX}${SEARCH_FAILURE}`,
  payload: error,
})