import { Grid } from "@mui/material";
import React from "react";
import Events from "./Events";
import Benefits from "./Benefits";

const EventsandMeetings = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          padding: "0 20px",
          justifyContent: "space-around",
        }}
      >
        <Grid item xs={9}>
          <Grid container>
            <Grid item xs={12} lg={6}>
              <Events />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Benefits />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default EventsandMeetings;
