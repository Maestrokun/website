import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import useStyles from "./styled.hero";

const welcome =
  " Welcome to Christ The King of Kings, Way of Truth Church (J.J.J.Church)";

const descriptions =
  "If you do decide to make Christ The King of Kings, Way of Truth Church your spiritual family, there are a few things I would like to share with you based on God’s plan and covenant with us. We are a spiritual family and your integration into us guarantees full restoration and transformation of your life. God sets people into this church simply to be able to access their lives with the fullness of His Spirit.";
const Hero = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.heroContainer}>
      <Grid item xs={12} md={6} lg={6} className={classes.heroContent}>
        <Typography variant="h3" gutterBottom>
          {welcome}
        </Typography>
        <Typography variant="subtitle1" paragraph>
          {descriptions}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.ctaButton}
        >
          I am new here
        </Button>
      </Grid>
    </Grid>
  );
};

export default Hero;
