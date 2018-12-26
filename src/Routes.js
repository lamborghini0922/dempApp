import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./App";
import Authentication from "./components/Authentication";
import SignIn from "./components/SignIn";
import Main from "./components/Main";

const Routes = (
  <Route component={App}>
    <Route component={Authentication}>
      <Route path="member/top" component={Main} />
    </Route>

    <Route path="login" component={SignIn} />
  </Route>
);
export default Routes;
