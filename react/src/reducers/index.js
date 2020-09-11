import { combineReducers } from 'redux';
import { albumFetchReducer } from './albumReducers';
import { artistFetchReducer } from './artistReducers';
import { playlistFetchReducer } from './playlistReducers';
import { trackFetchReducer } from './trackReducers';
import { tokenReducer } from './authReducers';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  album: albumFetchReducer,
  artist: artistFetchReducer,
  playlist: playlistFetchReducer,
  track: trackFetchReducer,
  auth: tokenReducer,
  form: formReducer,
})