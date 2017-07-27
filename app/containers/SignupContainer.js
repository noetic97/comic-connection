import { connect } from 'react-redux';
import { postSignupUser } from '../actions';
import Signup from '../components/Signup/Signup';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitSignup: (signupCreds) => {
      dispatch(postSignupUser(signupCreds));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
