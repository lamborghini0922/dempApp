import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MyContents from "./MyContents";
import MediaCard from "./MediaCard";
import ClassificationResultCard from "./ClassificationResultCard";
import PlotResultCard from "./PlotResultCard";
import DropFileCard from "./DropFileCard";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import ButtonAppBar from "../containers/ButtonAppBar";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 2
  }
});

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextState) {
    if (nextState.loginStatus) {
      this.setState({ loginStatus: nextState.loginStatus });
      localStorage.setItem("session", this.loginStatus);
    } else {
      this.setState({ message: "login fail" });
    }
  }

  render() {
    const { loginStatus } = this.props;
    const sts = loginStatus.loginStatus.status;

    const { classes } = this.props;
    const images = [
      "/static/images/dog_original.png",
      "/static/images/dog_guided_backprop.png",
      "/static/images/dog_grad_cam.png",
      "/static/images/dog_guided_grad_cam.png"
    ];
    const titles = [
      "Upload image",
      "Classification Results",
      "Softmax",
      "Guided Backprop Cat",
      "Grad-CAM Cat",
      "Guided Grad-CAM Cat"
    ];
    return sts !== 1 ? (
      <Redirect to={"/login"} />
    ) : (
      <MuiThemeProvider>
        <div className={classes.root}>
          <ButtonAppBar />
          <Grid container spacing={8}>
            <Grid container item xs={12} spacing={24}>
              <Grid item xs={4}>
                <DropFileCard image={images[0]} title={titles[0]} />
              </Grid>
              <Grid item xs={4}>
                <ClassificationResultCard title={titles[1]} />
              </Grid>
              <Grid item xs={4}>
                <PlotResultCard title={titles[2]} />
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={24}>
              <Grid item xs={4}>
                <MediaCard image={images[1]} title={titles[3]} />
              </Grid>
              <Grid item xs={4}>
                <MediaCard image={images[2]} title={titles[4]} />
              </Grid>
              <Grid item xs={4}>
                <MediaCard image={images[3]} title={titles[5]} />
              </Grid>
            </Grid>
          </Grid>
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
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Main);
