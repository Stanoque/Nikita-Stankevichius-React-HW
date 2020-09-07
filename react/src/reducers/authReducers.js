import {GET_ACCESS_TOKEN, REFRESH_TOKEN_START, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILURE} from '../actionTypes/actionTypes';

const initialState = {
  isRequesting: false,
}

export const tokenReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ACCESS_TOKEN:
      return {
        ...state,
        ...action.payload
      }
    case REFRESH_TOKEN_START:
      return {
        ...state,
        isRequesting: true,
      }
    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isRequesting: false,
      }
    case REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        ...action.payload,
        isRequesting: false,
      }
    default: return state;
  }
}