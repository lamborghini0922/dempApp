import DropFile from "../components/DropFile";
import classifyAction from "../actions/classifyAction";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    classifyRequestStatus: state
  };
};

const mapDispatchToProps = dispatch => {
  console.log("dropfile/mapDispatchToProps");
  return {
    classifyAction: request => {
      dispatch(classifyAction(request));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropFile);
