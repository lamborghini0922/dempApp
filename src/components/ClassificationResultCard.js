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

import ClassificationTable from "./ClassificationTable";

const styles = {
  card: {},
  media: {
    width: 270,
    height: 270,
    backgroundColor: "gray",
    align: "center"
  }
};

class ClassificationResultCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    const { classificationResults } = this.props;
    const { title } = this.props;
    return (
      <Card className={classes.card}>
        <ClassificationTable classificationResults={classificationResults} />
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

ClassificationResultCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClassificationResultCard);
