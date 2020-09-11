import { connect } from 'react-redux';
import { get } from 'lodash';
import { fetchPlaylists } from '../../actions/playlistActions';
import { ListOfPlaylistItems } from './ListOfPlaylistItems';

const mapStateToProps = state => ({
  fetchedPlaylists: state.playlist.data,
  tokenType: state.auth.tokenType,
  accessToken: state.auth.accessToken,
  queryValues: get(state, 'form.queryValues.values.queryValues', '').split(' '),
  limit: get(state, 'form.limit.values.limit', 20),
})

const mapDispatchToProps = dispatch => {
  return {
    searchPlaylists: (queryValues, type, tokenType, accessToken, limit, offset) => {
      dispatch(fetchPlaylists(queryValues, type, tokenType, accessToken, limit, offset));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfPlaylistItems);