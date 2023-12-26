import { Grid, Typography } from "@mui/material";
import React from "react";
import { DANIEL_BENEFITS } from "../../../constants/featureData";

const Benefits = () => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      <Grid
        item
        xs={5}
        // sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid
          container
          xs={12}
          sx={{ display: "column", justifyContent: "flex-start" }}
        >
          <Grid item xs={12}>
            <Typography
              sx={{
                fontFamily: "ubuntu",
                fontSize: "50px",
                fontWeight: 500,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Benefits
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {DANIEL_BENEFITS.map((feat, index) => (
              <Grid
                container
                display="flex"
                flexWrap="nowrap"
                alignItems="center"
                justifyContent="flex-start"
                key={index}
                style={{ width: "500px" }}
              >
                <Grid item mr={1}>
                  <Typography>{feat.icon}</Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      fontFamily: "sans-serif",
                      textAlign: "start",
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontWeight: 100,
                      mb: 2,
                      mr: 10,
                      color: "#404040",
                    }}
                  >
                    {feat.text}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Benefits;
