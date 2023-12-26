import React from "react";
import Navbar from "../../components/home/navbar/Navbar";
import { Grid } from "@mui/material";
import EventsandMeetings from "../../components/home/events/EventsandMeetings";
import Services from "../../components/home/services/Services";
import Clients from "../../components/home/clients/Clients";
import Hero from "Modules/components/home/hero/Hero";

const Home = () => {
  return (
    <Grid>
      <Grid
        container
        sx={{
          backgroundColor: "#fff7fd",
        }}
      >
        <Grid item xs={12} sx={{ mb: 2 }}>
          <Navbar />
        </Grid>
      </Grid>
      <Grid containers sx={{ justifyContent: "center" }} mt={10} mb={3}>
        <Hero />
      </Grid>
      <Grid containers sx={{ justifyContent: "center" }} mt={10} mb={3}>
        <EventsandMeetings />
      </Grid>
      <Grid containers sx={{ justifyContent: "center" }} mt={10} mb={3}>
        <Services />
      </Grid>
      <Grid containers sx={{ justifyContent: "center" }} mt={10} mb={3}>
        <Clients />
      </Grid>
    </Grid>
  );
};

export default Home;
