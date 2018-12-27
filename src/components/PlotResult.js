import React from "react";
import Plot from "react-plotly.js";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "80%",
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
    const { classificationResults } = this.props;

    var x = [];
    var y = [];
    var text = [];

    classificationResults.map((obj, key) => {
      x[key] = obj.name;
      y[key] = Number(obj.value);
      //text[key] = obj.name;
    });

    var layout = {
      autosize: true,
      width: 470,
      height: 262,
      margin: {
        b: 30,
        t: 15,
        pad: 1
      },
      xaxis: { rangemode: "tozero" },
      yaxis: { rangemode: "tozero" }
    };

    var trace = {
      x: x,
      y: y,
      text: text,
      type: "bar"
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
