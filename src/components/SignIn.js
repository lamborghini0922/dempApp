import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { Redirect } from "react-router-dom";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contact: [] };
  }

  componentWillReceiveProps(nextState) {
    console.log(`receiveProps`);
    console.log(JSON.stringify(nextState));

    if (nextState.loginStatus) {
      this.setState({ loginStatus: nextState.loginStatus });
      localStorage.setItem("session", this.loginStatus);
    } else {
      this.setState({ message: "login fail" });
    }
  }

  onLogin(e) {
    e.preventDefault();
    const { loginApi } = this.props;
    console.log("onLogin");

    let id = this.state.contact.id;
    let pass = this.state.contact.password;

    if (!id) {
      this.setState({ message: "id required" });
    } else if (!pass) {
      this.setState({ message: "password required" });
    } else {
      this.setState({ message: null });
      // api 呼び出し
      console.log(`id=${id} pass=${pass}`);
      loginApi(id, pass);
    }
  }

  handleChange(propertyName, e) {
    const contact = this.state.contact;
    contact[propertyName] = e.target.value;
    this.setState({ contact: contact });
  }

  render() {
    const { loginStatus } = this.props;
    const sts = loginStatus.loginStatus.status;
    console.log("render()");
    console.log(JSON.stringify(loginStatus));
    console.log(JSON.stringify(sts));
    console.log(`status=${sts}`);
    const { classes } = this.props;
    return sts === 1 ? (
      <Redirect to={"/"} />
    ) : (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <div>
            <p>{this.state.message}</p>
          </div>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Id</InputLabel>
              <Input
                id="id"
                name="id"
                autoComplete="id"
                onChange={this.handleChange.bind(this, "id")}
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                onChange={this.handleChange.bind(this, "password")}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.onLogin.bind(this)}
            >
              Sign in
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);
