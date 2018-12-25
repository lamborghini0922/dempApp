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

const styles = {
  card: {},
  media: {
    width: 270,
    height: 270,
    backgroundColor: "gray",
    align: "center"
  }
};

class MediaCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    const { image } = this.props;
    const { title } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            image={image}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions />
      </Card>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
