import { makeStyles } from "@mui/styles";
import Pexels from "../../../../assets/pexels.jpeg";

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    backgroundImage: `url(${Pexels})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "calc(100vh - 64px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      flexDirection: "column",
      width: "max-content",
      padding: "0 20px",
      margin: "0 20px 0 0px",
    },
  },
  heroContent: {
    maxWidth: 600,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: "20px",
    borderRadius: "8px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
    },
  },
  ctaButton: {
    marginTop: 20,
  },
}));

export default useStyles;
