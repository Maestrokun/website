import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import useStyles from "../Card/styled.index";

function Card({ children, ...others }) {
  const classes = useStyles();

  return (
    <Box className={classes.root} {...others}>
      {children}
    </Box>
  );
}

export default Card;

Card.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
};

Card.defaultProps = {
  style: {},
};
