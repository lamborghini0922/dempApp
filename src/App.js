import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Main from "./containers/Main";
import SignIn from "./containers/SignIn";
import { Redirect } from "react-router-dom";

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  appBar: {
    position: "relative"
  },
  toolbarTitle: {
    flex: 1
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 2
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={SignIn} />
          </Switch>
        </div>
      </Router>
    );
  }
}

/*
const connectedApp = connect(state => ({
    user: state.user
}))(withStyles(styles)(App));

export default connectedApp;
*/

export default withStyles(styles)(App);
