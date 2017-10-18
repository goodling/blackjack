import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../Components/Login';
import { createUser, loginUser, checkUser, logoutUser } from '../Actions/User';

function mapStateToProps (state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
        checkUser,
        createUser,
        loginUser,
        logoutUser
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);