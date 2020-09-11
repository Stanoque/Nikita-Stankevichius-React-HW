import { connect } from 'react-redux';
import { get } from 'lodash';
import { fetchArtists } from '../../actions/artistActions';
import { ListOfArtistItems } from './ListOfArtistItems';

const mapStateToProps = state => ({
  fetchedArtists: state.artist.data,
  tokenType: state.auth.tokenType,
  accessToken: state.auth.accessToken,
  queryValues: get(state, 'form.queryValues.values.queryValues', '').split(' '),
  limit: get(state, 'form.limit.values.limit', 20),
})

const mapDispatchToProps = dispatch => {
  return {
    searchArtists: (queryValues, type, tokenType, accessToken, limit, offset) => {
      dispatch(fetchArtists(queryValues, type, tokenType, accessToken, limit, offset));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfArtistItems);