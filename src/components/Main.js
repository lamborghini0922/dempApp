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
import LoadingOverlay from "react-loading-overlay";

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
      this.setState({ loginStatus: nextState.loginStatus.status });
      localStorage.setItem("session", this.loginStatus);
    } else if (nextState.classifyRequestStatus) {
      this.setState({ classifyRequestStatus: nextState.classifyRequestStatus });
    } else {
      this.setState({ message: "login fail" });
    }
  }

  /*componentDidUpdate(prevProps, prevState) {
    if (this.props.loginStatus) {
      this.setState({ loginStatus: this.props.loginStatus });
      localStorage.setItem("session", this.loginStatus);
    } else if (this.props.classifyRequestStatus) {
      this.setState({ classifyRequestStatus: this.props.classifyRequestStatus });
    } else {
      this.setState({ message: "login fail" });
    }
    　 }*/

  render() {
    const { loginStatus } = this.props;
    const sts = loginStatus.loginStatus.status;

    const { classes } = this.props;

    const { classifyRequestStatus } = this.props;
    const classifyRespnseStatus =
      classifyRequestStatus.classifyRequestStatus.status;

    var original = null;
    var guidedBackprop = null;
    var gradCAM = null;
    var guidedGradCAM = null;
    var classificationResults = [];

    if (classifyRespnseStatus === 1) {
      const response = classifyRequestStatus.classifyRequestStatus.response;
      original = classifyRequestStatus.classifyRequestStatus.request;
      guidedBackprop = response.results.camResult["guidedBackprop"];
      gradCAM = response.results.camResult["gradCAM"];
      guidedGradCAM = response.results.camResult["guidedGradCAM"];
      classificationResults = response.results.classificationResults;
    }

    // isProcessing
    const isActive = classifyRespnseStatus === 2 ? true : false;

    const titles = [
      "Upload image",
      "Classification Results",
      "Softmax",
      "Guided Backprop ",
      "Grad-CAM ",
      "Guided Grad-CAM "
    ];
    return sts !== 1 ? (
      <Redirect to={"/login"} />
    ) : (
      <MuiThemeProvider>
        <LoadingOverlay active={isActive} spinner text="Loading ...">
          <div className={classes.root}>
            <ButtonAppBar />
            <Grid container spacing={8}>
              <Grid container item xs={12} spacing={24}>
                <Grid item xs={4}>
                  <DropFileCard image={original} title={titles[0]} />
                </Grid>
                <Grid item xs={4}>
                  <ClassificationResultCard
                    classificationResults={classificationResults}
                    title={titles[1]}
                  />
                </Grid>
                <Grid item xs={4}>
                  <PlotResultCard
                    classificationResults={classificationResults}
                    title={titles[2]}
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} spacing={24}>
                <Grid item xs={4}>
                  <MediaCard image={guidedBackprop} title={titles[3]} />
                </Grid>
                <Grid item xs={4}>
                  <MediaCard image={gradCAM} title={titles[4]} />
                </Grid>
                <Grid item xs={4}>
                  <MediaCard image={guidedGradCAM} title={titles[5]} />
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
        </LoadingOverlay>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Main);
