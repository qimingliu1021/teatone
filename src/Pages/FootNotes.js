import { Card, Typography, Box, List, ListItem } from "@mui/material";
import React from "react";

function FootNotes() {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#ced4da",
          display: "flex",
          gap: "15rem",
          justifyContent: "center",
          // width: "90%",
        }}
      >
        <Card sx={{ backgroundColor: "#ced4da" }} elevation={0}>
          <Typography>About Us</Typography>
          <List>
            <ListItem>Events</ListItem>
            <ListItem>About company</ListItem>
            <ListItem>Community</ListItem>
          </List>
        </Card>
        <Card sx={{ backgroundColor: "#ced4da" }} elevation={0}>
          <Typography>Contact Us</Typography>
          <List>
            <ListItem>LinkedIn</ListItem>
            <ListItem>Email Us</ListItem>
          </List>
        </Card>
        <Card sx={{ backgroundColor: "#ced4da" }} elevation={0}>
          <Typography>What's more</Typography>
          <List>
            <ListItem>To be continued...</ListItem>
          </List>
        </Card>
      </Box>
      <Typography sx={{ textAlign: "center" }}>
        All content © The Chinese Tea Shop unless otherwise indicated. All
        rights reserved.
      </Typography>
    </Box>
  );
}

export default FootNotes;
