import Main from "../components/Main";
import loginApi from "../actions/loginApi";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    loginStatus: state,
    classifyRequestStatus: state
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Main)
);
