import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBar from "./components/ButtonAppBar";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import SignIn from "./containers/SignIn";

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
          <ButtonAppBar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={SignIn} />
          </Switch>
          <footer className={classes.footer}>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              component="p"
            >
              © syntheticgestalt Inc. All rights reserved.
            </Typography>
          </footer>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);

import { login, logout } from "./actions/SignIn";
console.log(login("hiroo", "password"));
