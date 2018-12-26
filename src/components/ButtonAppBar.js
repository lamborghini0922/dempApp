import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 20
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class ButtonAppBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
    const { loginStatus } = this.props;
    const { logoutApi } = this.props;
    const sts = loginStatus.loginStatus.status;
    if (sts === 1) {
      logoutApi();
    }
  }

  render() {
    const { classes } = this.props;
    const myStyle = { backgroundColor: "#999" };
    const { logout } = this.props;
    const { loginStatus } = this.props;
    const buttonLabel = loginStatus.loginStatus.buttonText;

    return (
      <div className={classes.root}>
        <AppBar position="static" style={myStyle}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Cell Inspector
            </Typography>
            <Button
              color="inherit"
              type="submit"
              className={classes.submit}
              onClick={this.handleClick.bind(this)}
            >
              {buttonLabel}
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
