import { useState, useEffect } from "react";
import { Typography, Button, Box, Card } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import TeaMatch from "./Pages/TeaMatch";
import TeaTime from "./Pages/TeaTime";
import DashBoard from "./Pages/DashBoard";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  // useEffect(() => {
  //   fetch("/time")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCurrentTime(data.time);
  //     });
  // }, []);

  return (
    <Router>
      <Box>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/teamatch" element={<TeaMatch />} />
          <Route path="/teatimenow" element={<TeaTime />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
        {/* <Typography>The current time is {currentTime}.</Typography> */}
      </Box>
    </Router>
  );
}

export default App;
