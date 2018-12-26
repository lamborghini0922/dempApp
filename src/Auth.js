import React from "react";
import { Redirect } from "react-router-dom";

const Auth = props =>
  props.status === 1 ? props.children : <Redirect to={"/login"} />;

export default Auth;
