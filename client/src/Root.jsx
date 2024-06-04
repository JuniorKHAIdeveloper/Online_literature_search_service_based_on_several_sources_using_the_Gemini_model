import React from "react";
import Navigation from "./components/Navigation";
import Container from "@mui/material/Container";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes as Router, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#BC986A",
    },
    error: {
      main: "#DAAD86",
    },
    success: {
      main: "#fbe288",
    },
    warning: {
      main: "#d32f2f",
    },
    red: {
      main: "#d32f2f",
    },
  },
});

const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          minHeight: "97vh",
          paddingBottom: "52.5px",
          position: "relative",
        }}
      >
        <Router>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Router>
      </Container>
    </ThemeProvider>
  );
};

export default Routes;
