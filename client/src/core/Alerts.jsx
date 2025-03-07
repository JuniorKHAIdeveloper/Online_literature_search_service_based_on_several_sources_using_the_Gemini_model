import React from "react";
import { Snackbar, Alert } from "@mui/material";

const Alerts = ({ alert, setAlert }) => {
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert(null);
  };

  return (
    <Snackbar
      open={Boolean(alert)}
      autoHideDuration={3000}
      onClose={handleCloseAlert}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleCloseAlert} severity={alert.type} sx={{ width: "100%" }}>
        {alert.message}
      </Alert>
    </Snackbar>
  );
};

export default Alerts;
