import { GET_ACCESS_TOKEN, REFRESH_TOKEN_START, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILURE } from '../actionTypes/actionTypes';
import {client_id, client_secret, token_link} from '../constants/userCredentials';

export const getAccessToken = (accessToken, refreshToken, tokenType) => ({
  type: GET_ACCESS_TOKEN,
  payload: {
    accessToken,
    refreshToken,
    tokenType,
  }
});

export const refreshToken = (refreshToken) => {
  return dispatch => {
    dispatch(refreshTokenStarted());

    const tokenRefreshLink = `grant_type=refresh_token&refresh_token=${refreshToken}`;
    fetch(token_link, {
      method: 'POST',
      body: tokenRefreshLink,
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => response.json())
    .then(decodedResponse => {
      const {access_token, token_type} = decodedResponse;
      dispatch(refreshTokenSuccess(access_token, token_type));
    })
    .catch(error => dispatch(refreshTokenFailure(error)));
  }
}

const refreshTokenStarted = () => ({
  type: REFRESH_TOKEN_START,
})

const refreshTokenSuccess = (accessToken, tokenType) => ({
  type: REFRESH_TOKEN_SUCCESS,
  payload: {
    accessToken,
    tokenType,
  }
})

const refreshTokenFailure = (error) => ({
  type: REFRESH_TOKEN_FAILURE,
  payload: {
    error,
  }
})

