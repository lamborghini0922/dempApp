import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBar from "./components/ButtonAppBar";
import Typography from "@material-ui/core/Typography";
import Main from "./components/Main";

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <ButtonAppBar />
        <Main />
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(App);
