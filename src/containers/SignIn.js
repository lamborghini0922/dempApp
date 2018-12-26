import SignIn from "../components/SignIn";
import { login } from "../actions/SignIn";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    login: (id, password) => {
      dispatch(login(id, password));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignIn)
);
