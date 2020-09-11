import { connect } from 'react-redux';
import { get } from 'lodash';
import { fetchAlbums } from '../../actions/albumActions';
import { ListOfAlbumItems } from './ListOfAlbumItems';

const mapStateToProps = state => ({
  fetchedAlbums: state.album.data,
  tokenType: state.auth.tokenType,
  accessToken: state.auth.accessToken,
  queryValues: get(state, 'form.queryValues.values.queryValues', '').split(' '),
  limit: get(state, 'form.limit.values.limit', 20),
})

const mapDispatchToProps = dispatch => {
  return {
    searchAlbums: (queryValues, type, tokenType, accessToken, limit, offset) => {
      dispatch(fetchAlbums(queryValues, type, tokenType, accessToken, limit, offset));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfAlbumItems);