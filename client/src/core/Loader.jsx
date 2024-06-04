import React from "react";
import { Box, Modal as MaterialModal } from "@mui/material";
import SearchLoader from "../components/search/SearchLoader";
import RobotSearchAnimation from "../components/search/RobotSearchAnimation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Loader = ({ isArtInt }) => {
  return (
    <>
      {!isArtInt ? (
        <MaterialModal
          open={true}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <SearchLoader />
          </Box>
        </MaterialModal>
      ) : (
          <RobotSearchAnimation />
      )}
    </>
  );
};

export default Loader;
