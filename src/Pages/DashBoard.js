import { Typography, Box } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import FootNotes from "./FootNotes";

function DashBoard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Navbar />
      <Typography>DashBoard</Typography>
      <FootNotes />
    </Box>
  );
}

export default DashBoard;
