import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlistActions';
import { ListOfPlaylistItems } from './ListOfPlaylistItems';

const mapStateToProps = state => ({
  fetchedPlaylists: state.playlist.data,
})

const mapDispatchToProps = dispatch => {
  return {
    searchPlaylists: (queryValues, type, tokenType, accessToken, limit, offset) => {
      dispatch(fetchPlaylists(queryValues, type, tokenType, accessToken, limit, offset));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfPlaylistItems);