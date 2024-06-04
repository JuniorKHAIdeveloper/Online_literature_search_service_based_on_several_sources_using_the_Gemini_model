import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const style = {
  height: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
};

const NotFoundPage = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };
  return (
    <div style={style}>
      <div>
        <Typography variant="h1">404</Typography>
        <Typography variant="h3">Not Found</Typography>
        <Button variant="contained" sx={{ mt: 2 }} onClick={clickHandler}>
          На головну
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
