import React from "react";
// import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import CssBaseline from "@mui/material/CssBaseline";
// import useScrollTrigger from "@mui/material/useScrollTrigger";
// import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { logout } from "../authentication/firebase";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = (props) => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  return (
    <AppBar
      sx={{
        background:
          "linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div className="left">
          <Typography className="header" onClick={() => navigate("/")}>
            RECIPES
          </Typography>
        </div>
        {user ? (
          <div className="right" style={{ display: "flex" }}>
            <span>{user?.email}</span>
            {/* <ArrowDropDownIcon /> */}
            <span style={{ marginLeft: "10px" }}>
              <div className="drop-profile">
                <div className="nav-option">
                  <span className="nav-logout-text" onClick={logout}>
                    Logout
                  </span>
                </div>
              </div>
            </span>
          </div>
        ) : (
          <div className="right">
            <Typography onClick={() => navigate("/login")}>Login</Typography>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
