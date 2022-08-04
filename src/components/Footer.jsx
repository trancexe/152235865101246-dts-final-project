import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Footer = () => {
  return (
    <AppBar
      sx={{
        color: "#E5E5E5",
        background:
          "linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%)",
        bottom: 0,
        position: "relative",
      }}
    >
      <Toolbar>
        <div>
          dibuat untuk final project DTS REA2A &#169; Timotheus Ingga Pranata
          2022
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
