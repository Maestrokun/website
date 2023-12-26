import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  menuItem: {
    color: "#000",
    cursor: "pointer",
    "&:hover": {
      padding: "6px",
      borderRadius: "10px",
      backgroundColor: "#F5E3FD",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
    },
  },
}));

export default useStyles;
