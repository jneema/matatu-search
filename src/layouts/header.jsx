import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import { Avatar, Menu, MenuItem } from "@mui/material";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export default function Header() {
  const options = ["Add Route", "Add Matatu", "Make Correction", "Contact Us"];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex", position: "fixed" }}>
      <IconButton
        color="inherit"
        aria-label="show options"
        edge="end"
        onMouseEnter={handleMouseEnter}
      >
        <Avatar />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMouseLeave}
        onMouseLeave={handleMouseLeave}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} onClick={handleMouseLeave}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
