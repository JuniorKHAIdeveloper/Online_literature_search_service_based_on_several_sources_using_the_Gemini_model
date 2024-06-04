import React from "react";
import {
  Box,
  Typography,
  Modal as MaterialModal,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  maxHeight: "800px",
  width: "600px",
};

const SearchArtIntModal = ({
  data,
  modalOpen,
  setModalOpen,
  setResults,
  setIsSearching,
  setAlert,
  test = false,
}) => {
  const handleClose = () => setModalOpen(false);
  const clickHandler = (item) => {
    setModalOpen(false);
    setIsSearching(true);
    fetch("/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ search: `${item.name} ${item.author}` }),
      body: JSON.stringify({ search: `${item.name}` }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setResults(data.results);
        setIsSearching(false);
      })
      .catch((error) => {
        setIsSearching(false);
        console.error(error);
        setAlert({ type: "error", message: "Виникла помилка." });
      });
  };

  return (
    <>
      {!test && (
        <MaterialModal
          open={modalOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ textAlign: "center" }}
            >
              Результати:
            </Typography>
            {data.map((item,index) => {
              return (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => clickHandler(item)}
                  className="gemini-result"
                  key={index}
                >
                  {Object.values(item).map((value) => (
                    <p style={{ margin: "8px 0px" }}>{value}</p>
                  ))}
                  <hr />
                </div>
              );
            })}
          </Box>
        </MaterialModal>
      )}
      {test && (
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            Результати:
          </Typography>
          {data.map((item, index) => {
            return (
              <div key={index}
                style={{ cursor: "pointer" }}
                onClick={() => clickHandler(item)}
                className="gemini-result"
              >
                {Object.values(item).map((value) => (
                  <p style={{ margin: "8px 0px" }}>{value}</p>
                ))}
                <hr />
              </div>
            );
          })}
        </Box>
      )}
    </>
  );
};

export default SearchArtIntModal;
