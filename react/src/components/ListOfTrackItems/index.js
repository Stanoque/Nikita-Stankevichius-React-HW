import { connect } from 'react-redux';
import { get } from 'lodash';
import { fetchTracks } from '../../actions/trackActions';
import { ListOfTrackItems } from './ListOfTrackItems';

const mapStateToProps = state => ({
  fetchedTracks: state.track.data,
  tokenType: state.auth.tokenType,
  accessToken: state.auth.accessToken,
  queryValues: get(state, 'form.queryValues.values.queryValues', '').split(' '),
  limit: get(state, 'form.limit.values.limit', 20),
})

const mapDispatchToProps = dispatch => {
  return {
    searchTracks: (queryValues, type, tokenType, accessToken, limit, offset) => {
      dispatch(fetchTracks(queryValues, type, tokenType, accessToken, limit, offset));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfTrackItems);