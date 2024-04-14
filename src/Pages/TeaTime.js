import { Typography, Box } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import FootNotes from "./FootNotes";

function TeaTime() {
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
      <Typography>TeaStore</Typography>
      <FootNotes />
    </Box>
  );
}

export default TeaTime;
