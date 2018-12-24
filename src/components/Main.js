import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MyContents from "./MyContents";
import MediaCard from "./MediaCard";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <Grid container spacing={40} alignItems="flex-end">
          <Grid item xs={4}>
            <MediaCard />
          </Grid>
          <Grid item xs={4}>
            <MediaCard />
          </Grid>
          <Grid item xs={4}>
            <MediaCard />
          </Grid>
          <Grid item xs={4}>
            <MediaCard />
          </Grid>
          <Grid item xs={4}>
            <MediaCard />
          </Grid>
          <Grid item xs={4}>
            <MediaCard />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default Main;
