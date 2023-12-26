import { Grid, Typography } from "@mui/material";
import React from "react";
import ClientCard from "./ClientCard";

const Clients = () => {
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
            What My Clients Say
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ClientCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Clients;
