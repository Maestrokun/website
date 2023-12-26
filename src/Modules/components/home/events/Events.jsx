import { Grid, Typography, Box, Button, Stack } from "@mui/material";
import React from "react";
import { NEXT_EVENT } from "../../../constants/featureData";
import Card from "shared/Card";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Events = () => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      <Grid item xs={5}>
        <Grid
          container
          xs={12}
          sx={{ display: "column", justifyContent: "flex-start" }}
        >
          <Grid item xs={12}>
            <Typography
              sx={{
                fontFamily: "ubuntu",
                fontSize: "32px",
                fontWeight: 500,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Events
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {NEXT_EVENT.map((item, index) => (
              <Card sx={{ width: "450px", p: 3 }}>
                <Grid container display="grid" alignItems="flex-start">
                  <Grid item display="flex" alignItems="flex-start">
                    <Typography sx={{ fontSize: "22px", fontWeight: 800 }}>
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item display="flex" textAlign="flex-start">
                    <Typography sx={{ fontSize: "14px" }} align="left">
                      {item.description}
                    </Typography>
                  </Grid>
                  <Grid item mt={2} display="flex">
                    <Box
                      sx={{
                        backgroundColor: "#9C27B0",
                        borderRadius: "5px",
                        color: "#FFFFFF",
                        width: "10%",
                        p: 1,
                        mr: 2,
                      }}
                    >
                      <Typography sx={{ fontSize: "14px", fontWeight: 800 }}>
                        Jan
                      </Typography>

                      <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                        30
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                      }}
                    >
                      <Stack direction="row">
                        <AccessTimeIcon style={{ color: "#9C27B0" }} />
                        <Typography ml={1}>{item.time}</Typography>
                      </Stack>
                      <Stack direction="row">
                        <LocationOnOutlinedIcon style={{ color: "#9C27B0" }} />
                        <Typography ml={1}>{item.venue}</Typography>
                      </Stack>
                    </Box>
                  </Grid>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 3, width: "30%" }}
                  >
                    Learn more
                  </Button>
                </Grid>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Events;
