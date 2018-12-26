import ButtonAppBar from "../components/ButtonAppBar";
import { logout } from "../actions/loginApi";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    loginStatus: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutApi: () => {
      dispatch(logout());
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ButtonAppBar)
);
