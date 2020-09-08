import { connect } from 'react-redux';
import { getAccessToken } from '../../actions/authActions';
import { Authentificator } from './Authentificator';

const mapDispatchToProps = dispatch => {
  return {
    pushAccessToken: (accessToken, refreshToken, tokenType) => {
      dispatch(getAccessToken(accessToken, refreshToken, tokenType));
    }
  }
}

export default connect(null, mapDispatchToProps)(Authentificator);

