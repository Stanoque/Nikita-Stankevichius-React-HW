import { connect } from 'react-redux';
import { fetchTracks } from '../../actions/trackActions';
import { ListOfTrackItems } from './ListOfTrackItems';

const mapStateToProps = state => ({
  fetchedTracks: state.track.data,
  tokenType: state.auth.tokenType,
  accessToken: state.auth.accessToken,
})

const mapDispatchToProps = dispatch => {
  return {
    searchTracks: (queryValues, type, tokenType, accessToken, limit, offset) => {
      dispatch(fetchTracks(queryValues, type, tokenType, accessToken, limit, offset));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfTrackItems);