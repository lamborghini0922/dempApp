import SignIn from "../components/SignIn";
import loginApi from "../actions/loginApi";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    loginStatus: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginApi: (id, password) => {
      dispatch(loginApi(id, password));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignIn)
);
