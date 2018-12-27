import { combineReducers } from "redux";
import loginStatus from "./loginStatus";
import classifyRequestStatus from "./classifyRequestStatus";

export default combineReducers({
  loginStatus,
  classifyRequestStatus
});
