import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MyContents from "./MyContents";
import MediaCard from "./MediaCard";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function FormRow(props) {
  const { classes } = props;
  const { images } = props;
  console.log(images);

  return (
    <React.Fragment>
      <Grid item xs={4}>
        <MediaCard image={images[0]} />
      </Grid>
      <Grid item xs={4}>
        <MediaCard image={images[1]} />
      </Grid>
      <Grid item xs={4}>
        <MediaCard image={images[2]} />
      </Grid>
    </React.Fragment>
  );
}

FormRow.propTypes = {
  classes: PropTypes.object.isRequired
};

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    const imagesList1 = ["/static/images/dog_original.png", "", ""];
    const titleList1 = ["upload images", "Classification Results", "Softmax"];
    const imagesList2 = [
      "/static/images/dog_guided_backprop.png",
      "/static/images/dog_grad_cam.png",
      "/static/images/dog_guided_grad_cam.png"
    ];
    return (
      <MuiThemeProvider>
        <div className={classes.root}>
          <Grid container spacing={8}>
            <Grid container item xs={12} spacing={24}>
              <FormRow classes={classes} images={imagesList1} />
            </Grid>
            <Grid container item xs={12} spacing={24}>
              <FormRow classes={classes} images={imagesList2} />
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Main);
