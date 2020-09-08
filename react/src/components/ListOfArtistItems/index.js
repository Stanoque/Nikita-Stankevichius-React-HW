import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artistActions';
import { ListOfArtistItems } from './ListOfArtistItems';

const mapStateToProps = state => ({
  fetchedArtists: state.artist.data,
})

const mapDispatchToProps = dispatch => {
  return {
    searchArtists: (queryValues, type, tokenType, accessToken, limit, offset) => {
      dispatch(fetchArtists(queryValues, type, tokenType, accessToken, limit, offset));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfArtistItems);