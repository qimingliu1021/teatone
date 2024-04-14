import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Toolbar
      sx={{
        color: "black",
      }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{ flexGrow: 1, color: "#40c057", ml: -2 }}
      >
        TeaTone
      </Typography>
      <Button color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/teamatch">
        Find your Tea
      </Button>
      <Button color="inherit" component={Link} to="/teatimenow">
        Tea time now
      </Button>
      <Button color="inherit" component={Link} to="/dashboard">
        Dashboard
      </Button>
    </Toolbar>
  );
}

export default NavBar;
