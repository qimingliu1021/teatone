import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import FootNotes from "./FootNotes";
import { Typography, Button, Box, Card } from "@mui/material";
import theme from "../Theme";
import titleImage from "../img/cover-1.jpeg";
import titleImageA from "../img/cover-2.jpg";
import BkImage from "../img/background-text.jpeg";
import mingChao from "../img/dynasties/mingchao.jpeg";
import zhouChao from "../img/dynasties/xizhou.jpeg";
import dongHan from "../img/dynasties/donghan.jpeg";
import qingChao from "../img/dynasties/qingchao.jpeg";
import tangChao from "../img/dynasties/tangchao.jpeg";

function Welcome() {
  const [opacityImage1, setOpacityImage1] = useState(1);
  const [opacityImage2, setOpacityImage2] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacityImage1((oldOpacity) => (oldOpacity === 1 ? 0 : 1));
      setOpacityImage2((oldOpacity) => (oldOpacity === 1 ? 0 : 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const dynasties = [
    { name: "Western Zhou (1046 BC – 771 BC)", image: zhouChao },
    { name: "Eastern Han (25 AD – 220 AD)", image: dongHan },
    { name: "Tang Dynasty (690 AD - 705 AD)", image: tangChao },
    { name: "Ming Dynasty (1368 AD - 1644 AD)", image: mingChao },
    { name: "Qing Dynasty (1644 AD - 1912 AD)", image: qingChao },
  ];

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          position: "relative",
          height: "90vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "110%",
            backgroundImage: `url(${titleImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "opacity 1s ease-in-out",
            opacity: opacityImage1,
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "110%",
            backgroundImage: `url(${titleImageA})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "opacity 1s ease-in-out",
            opacity: opacityImage2,
            zIndex: -1,
          }}
        />
        <Typography
          variant="h3"
          sx={{
            zIndex: 1,
            textAlign: "center",
            position: "relative",
          }}
        >
          Welcome to the TeaTone! Ready to choose the best tea for you?
        </Typography>
      </Box>
      <Box sx={{ marginBottom: 2, backgroundImage: `url(${BkImage})` }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mt: "3rem",
            mb: "1rem",
            font: "'sans-serif'",
            color: "white",
          }}
        >
          Every sip of tea is also a sip of thousands of years history...
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginBottom: 2,
            Bold: 500,
          }}
        >
          {dynasties.map((dynasty, index) => (
            <Card
              key={index}
              sx={{
                width: "90%",
                padding: 1,
                margin: 1,
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src={dynasty.image}
                sx={{
                  height: "500px",
                  width: 1,
                  objectFit: "cover",
                  // backgroundColor: "#f0f0f0",
                  marginBottom: 1,
                }}
              />
              <Typography>{dynasty.name}</Typography>
            </Card>
          ))}
        </Box>
      </Box>
      <FootNotes />
    </Box>
  );
}

export default Welcome;
