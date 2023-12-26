import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import React from "react";
import CLIENT_DATA from "./clientData";

const ClientCard = () => {
  return (
    <Grid display="flex" justifyContent="center" mb={3}>
      {CLIENT_DATA.map((client) => (
        <Card
          sx={{
            width: 370,
            height: 450,
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "rgb(240, 235, 235) 0px 0px 45px 0px",
            mr: 8,
          }}
        >
          <CardContent>
            <Grid
              container
              display="grid"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                justifyItems: "center",
                mt: 5,
              }}
              // sx={{ display: "flex", justifyContent: "center", mt: 5 }}
            >
              <Grid item>
                <FormatQuoteIcon sx={{ width: "40px", height: "40px" }} />
              </Grid>
              <Grid>
                <Avatar
                  alt="Remy Sharp"
                  src={client.image}
                  sx={{ width: "65px", height: "65px" }}
                />
              </Grid>
            </Grid>
            <Typography
              sx={{
                fontFamily: "ubuntu",
                fontSize: "23px",
                lineHeight: "25.5px",
                textAlign: "center",
                color: "#1e1515",
                mt: 2,
                mb: 1.5,
              }}
            >
              {client.messagae}
            </Typography>
            <Typography
              sx={{
                fontFamily: "ubuntu",
                fontSize: "23px",
                lineHeight: "25.5px",
                textAlign: "center",
                color: "#1e1515",
                mt: 8,
                mb: 1.5,
              }}
            >
              {client.name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default ClientCard;
