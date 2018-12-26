import SignIn from "../components/SignIn";
import { login } from "../actions/SignIn";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    login: (id, password) => {
      dispatch(login(id, password));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
