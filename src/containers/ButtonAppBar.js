import ButtonAppBar from "../components/ButtonAppBar";
import { logout } from "../actions/loginApi";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  console.log("mapStateToProps");
  console.log(JSON.stringify(state));
  return {
    loginStatus: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: (id, password) => {
      logout(id, password);
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ButtonAppBar)
);
