import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import Logo from "../../../../assets/logo.png";
import { AppBar, Toolbar, Typography, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useStyles from "./styled.navbar";

const menuItems = [
  {
    link: "",
    label: "Home",
  },
  {
    link: "#",
    label: "Department",
  },
  {
    link: "#",
    label: "Bands",
  },
  {
    link: "#",
    label: "Youth Church",
  },
  {
    link: "#",
    label: "Resources",
  },
  {
    link: "#",
    label: "About us",
  },
];

const Navbar = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar style={{ backgroundColor: "#fff" }}>
        <Grid
          container
          sx={{
            padding: "5px 20px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item>
            <img
              src={Logo}
              alt="logo"
              style={{ width: "70px", height: "70px" }}
            />
          </Grid>
          <Grid item sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton color="inherit" onClick={handleDrawerOpen} edge="start">
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerClose}
            >
              <div
                role="presentation"
                onClick={handleDrawerClose}
                onKeyDown={handleDrawerClose}
              >
                {menuItems.map((item, index) => (
                  <Typography
                    key={index}
                    variant="subtitle1"
                    className={classes.menuItem}
                    onClick={() => (window.location.href = item.link)}
                  >
                    {item.label}
                  </Typography>
                ))}
              </div>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{
                    fontSize: "12px",
                    padding: "10px",
                    backgroundColor: "#9C27B0",
                    alignItems: "center",
                    "&:hover": { backgroundColor: "#92148A" },
                  }}
                >
                  Contact us
                </Button>
              </Grid>
            </Drawer>
          </Grid>
          <Grid
            item
            display={{ xs: "none", sm: "flex" }}
            sx={{ gap: "50px" }}
            justifyContent="space-between"
            alignItems="center"
          >
            {menuItems.map((item, index) => (
              <Grid item key={index}>
                <Typography
                  variant="subtitle1"
                  className={classes.menuItem}
                  onClick={() => (window.location.href = item.link)}
                >
                  {item.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                fontSize: "12px",
                padding: "10px",
                backgroundColor: "#8654D2",
                alignItems: "center",
                "&:hover": { backgroundColor: "#92148A" },
              }}
            >
              Contact us
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
