import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/albumActions';
import { ListOfAlbumItems } from './ListOfAlbumItems';

const mapStateToProps = state => ({
  fetchedAlbums: state.album.data,
})

const mapDispatchToProps = dispatch => {
  return {
    searchAlbums: (queryValues, type, tokenType, accessToken, limit, offset) => {
      dispatch(fetchAlbums(queryValues, type, tokenType, accessToken, limit, offset));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfAlbumItems);