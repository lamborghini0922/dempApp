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
    console.log("plot");
    console.log(JSON.stringify(classificationResults));

    var x = [];
    var y = [];
    var text = [];

    classificationResults.map((obj, key) => {
      console.log(key + " " + obj.name + " " + obj.value);
      x[key] = obj.name;
      y[key] = Number(obj.value);
      text[key] = obj.name;
    });

    /*
    var x = [];
    for (var i = 0; i < 500; i++) {
      x[i] = Math.random();
    }
    */

    var layout = {
      autosize: true,
      width: 470,
      //width: 300,
      //width: 400,
      height: 262,
      margin: {
        b: 15,
        t: 5,
        pad: 1
      }
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
