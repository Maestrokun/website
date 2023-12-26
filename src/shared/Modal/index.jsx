import React from "react";
import PropTypes from "prop-types";
import { Modal as CModal } from "@mui/material";
import Box from "@mui/material/Box";

import useStyles from "./styled.modal";

import useModal from "../../hooks/useModal";

function Modal({ children, modalName, ...others }) {
  const classes = useStyles();
  const [state] = useModal();

  return (
    <CModal open={state.modalName === modalName} disableAutoFocus {...others}>
      <Box className={classes.root}>
        <Box sx={{ pb: 0, px: 0 }}>{children}</Box>
      </Box>
    </CModal>
  );
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  modalName: PropTypes.string.isRequired,
};
