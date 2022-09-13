import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Typography
      sx={{
        textAlign: "center",
        color: "#191970",
        position: "fixed",
        background: "orange",
        bottom: "0px",
        p: 1,
        right: "0",
        left: "0",
        padding: "16px",
      }}
    >
      Copyright © {new Date().getFullYear()}
    </Typography>
  );
};
export default Footer;
