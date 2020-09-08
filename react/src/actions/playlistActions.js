import { PLAYLIST_PREFIX } from '../actionTypes/prefixes';
import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILURE } from '../actionTypes/actionTypes';
import { fetchSearchResults } from '../services/spotifyAPI';
import {search_endpoint} from '../constants/userCredentials';

export const fetchPlaylists = (queryValues, type, tokenType, accessToken, limit, offset) => {
  return dispatch => {
    dispatch(fetchPlaylistsStarted());
    fetchSearchResults(queryValues, type, search_endpoint, tokenType, accessToken, fetchPlaylistsSuccess, fetchPlaylistsFailure, dispatch, limit, offset)
  }
}

const fetchPlaylistsStarted = () => ({
  type: `${PLAYLIST_PREFIX}${SEARCH_START}`,
})

const fetchPlaylistsSuccess = (data) => ({
  type: `${PLAYLIST_PREFIX}${SEARCH_SUCCESS}`,
  payload: data,
})

const fetchPlaylistsFailure = (error) => ({
  type: `${PLAYLIST_PREFIX}${SEARCH_FAILURE}`,
  payload: error,
})