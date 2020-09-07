import { combineReducers } from 'redux';
import { albumFetchReducer } from './albumReducers';
import { artistFetchReducer } from './artistReducers';
import { playlistFetchReducer } from './playlistReducers';
import { trackFetchReducer } from './trackReducers';
import { tokenReducer } from './authReducers';

export default combineReducers({
  albumFetchReducer,
  artistFetchReducer,
  playlistFetchReducer,
  trackFetchReducer,
  tokenReducer,
})