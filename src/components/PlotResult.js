import React from "react";
import Plot from "react-plotly.js";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 1,
    overflowX: "auto"
  },
  table: {
    minWidth: 200
  }
});

class PlotResult extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var x = [];
    for (var i = 0; i < 500; i++) {
      x[i] = Math.random();
    }

    var layout = {
      autosize: false,
      //width: 470,
      //width: 300,
      width: 400,
      height: 262,
      margin: {
        b: 25,
        t: 15,
        pad: 1
      }
    };

    var trace = {
      x: x,
      type: "histogram"
    };
    var data = [trace];

    return (
      <div>
        <Plot data={[trace]} layout={layout} />
      </div>
    );
  }
}

export default withStyles(styles)(PlotResult);
