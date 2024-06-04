import React from "react";
import { Button } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const Footer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const footerButtons = ["ПОШУК", "КАБІНЕТ", "ПРО НАС"];
  const clickHandler = (index) => {
    setSearchParams({ tab: index });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        height: "52.5px",
        position: "absolute",
        bottom: "0px",
        left: "0px",
        width: "100%",
      }}
    >
      <div
        style={{
          borderTop: "1px solid rgba(0, 0, 0, 0.12)",
          margin: "0 24px",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          {footerButtons.map((button, index) => (
            <Button
              variant="text"
              sx={{ flex: 1, p: 1, maxWidth: "fit-content", color: "black" }}
              onClick={() => clickHandler(index)}
            >
              {button}
            </Button>
          ))}
        </div>
        <p style={{ textAlign: "center", margin: "8px 0" }}>
          Всі права захищені ©
        </p>
        <p style={{ textAlign: "center", margin: "8px 0" }}>
          Контакт: a.g.ivanov@student.csn.khai.edu
        </p>
      </div>
    </div>
  );
};

export default Footer;
