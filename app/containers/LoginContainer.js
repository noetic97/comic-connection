import { connect } from 'react-redux';
import { loginUser, logOutUser } from '../actions';
import Login from '../components/Login/Login';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitLogin: (loginCreds) => {
      dispatch(loginUser(loginCreds));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
