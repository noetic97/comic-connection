import { connect } from 'react-redux';
import { postLoginUser } from '../actions';
import Login from '../components/Login/Login';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitLogin: (loginCreds) => {
      dispatch(postLoginUser(loginCreds));
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
