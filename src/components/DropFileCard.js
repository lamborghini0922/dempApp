import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import DropFile from "./DropFile";

const styles = {
  card: {},
  media: {
    width: 270,
    height: 270,
    margin: "auto"
  }
};

class DropFileCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    const { image } = this.props;
    const { title } = this.props;
    return (
      <Card className={classes.card}>
        <div className={classes.media}>
          <DropFile />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </Typography>
        </CardContent>

        <CardActions />
      </Card>
    );
  }
}

DropFileCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DropFileCard);
