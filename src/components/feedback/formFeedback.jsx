import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Box, Modal } from "@mui/material";

function FormFeedbackSnackbar({
  isOpen,
  onCloseFeedback,
  alertSeverity,
  message,
}) {
  return (
    <Modal open={isOpen} onClose={onCloseFeedback}>
      <Box sx={{ width: 500 }}>
        <Snackbar
          sx={{ zIndex: 1500 }}
          open={isOpen}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={onCloseFeedback}
        >
          <Alert
            variant="filled"
            severity={alertSeverity}
            onClose={onCloseFeedback}
          >
            {message}
          </Alert>
        </Snackbar>
      </Box>
    </Modal>
  );
}

export default FormFeedbackSnackbar;
