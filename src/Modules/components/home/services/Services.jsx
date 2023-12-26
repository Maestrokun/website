import { Grid, Typography } from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          padding: "0 20px",
          justifyContent: "space-around",
        }}
      >
        <Grid item xs={12} mb="72px">
          <Typography
            sx={{
              fontFamily: "ubuntu",
              fontSize: "58px",
              fontWeight: 600,
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Our Services
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
