import { connect } from 'react-redux';
import { signupUser } from '../actions';
import Signup from '../components/Signup/Signup';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitSignup: (signupCreds) => {
      dispatch(signupUser(signupCreds));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
