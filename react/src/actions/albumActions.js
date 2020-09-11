import { ALBUM_PREFIX } from '../actionTypes/prefixes';
import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILURE } from '../actionTypes/actionTypes';
import { fetchSearchResults } from '../services/spotifyAPI';
import {search_endpoint} from '../constants/userCredentials';

export const fetchAlbums = (queryValues, type, tokenType, accessToken, limit, offset) => {
  return dispatch => {
    dispatch(fetchAlbumsStarted());
    fetchSearchResults(queryValues, type, search_endpoint, tokenType, accessToken, fetchAlbumsSuccess, fetchAlbumsFailure, dispatch, limit, offset)
  }
}

const fetchAlbumsStarted = () => ({
  type: `${ALBUM_PREFIX}${SEARCH_START}`,
})

const fetchAlbumsSuccess = (data) => ({
  type: `${ALBUM_PREFIX}${SEARCH_SUCCESS}`,
  payload: data,
})

const fetchAlbumsFailure = (error) => ({
  type: `${ALBUM_PREFIX}${SEARCH_FAILURE}`,
  payload: error,
})