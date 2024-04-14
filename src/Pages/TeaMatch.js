import {
  Typography,
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
} from "@mui/material";
import Navbar from "./Navbar";
import FootNotes from "./FootNotes";
import React, { useState, useEffect } from "react";
import floralImg from "../img/flavours/floral.jpg";
import grassyImg from "../img/flavours/grassy.jpg";
import fruityImg from "../img/flavours/fruity.jpg";
import nuttyImg from "../img/flavours/nutty.jpg";
import woodyImg from "../img/flavours/woody.jpg";
import earthyImg from "../img/flavours/earthy.jpg";

function TeaMatch() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleSubmit = () => {
    console.log("Submission Logic Here");
  };

  const questions = [
    <Box key="flavour-question" sx={{ height: "100%" }}>
      <Typography> Question 1: What is your preferrable flavour?</Typography>
      <Card
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          minHeight: "400px",
        }}
        elevation={0}
      >
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Box component="span">
              <img
                src={nuttyImg}
                alt="Nutty"
                style={{ width: 50, marginRight: 8 }}
              />
              Nutty
            </Box>
          }
        />
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Box component="span">
              <img
                src={earthyImg}
                alt="Earthy"
                style={{ width: 50, marginRight: 8 }}
              />
              Earthy
            </Box>
          }
        />
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Box component="span">
              <img
                src={woodyImg}
                alt="woody"
                style={{ width: 50, marginRight: 8 }}
              />
              Roasted
            </Box>
          }
        />
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Box component="span">
              <img
                src={grassyImg}
                alt="Grassy"
                style={{ width: 50, marginRight: 8 }}
              />
              Grassy
            </Box>
          }
        />
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Box component="span">
              <img
                src={fruityImg}
                alt="Fruity"
                style={{ width: 50, marginRight: 8 }}
              />
              Fruity
            </Box>
          }
        />
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Box component="span">
              <img
                src={floralImg}
                alt="Floral"
                style={{ width: 50, marginRight: 8 }}
              />
              Floral
            </Box>
          }
        />
      </Card>
    </Box>,
    <Box
      key="health-concern-question"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography>
        Question 2: What is your health concern or expectation?
      </Typography>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "400px",
          justifyContent: "center",
        }}
      >
        <FormControlLabel
          control={<Checkbox />}
          label="Lower blood fat and body fat"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Beneficial to digestion and spped up metabolism process"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Protects the liver, and can also reduce inflammation"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Warming the stomach, release stress and fatigue"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Help lower the blood sugar level and prevent diabetes"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Anti-aging and help concentration"
        />
      </Card>
    </Box>,
    <Box
      key="personality-question"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography>
        Question 3: Choose a description that best describes you
      </Typography>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "400px",
          justifyContent: "center",
        }}
      >
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="x"
          name="radio-buttons-group"
        >
          {/* Green Tea */}
          <FormControlLabel
            value="a"
            control={<Radio />}
            label="An innocent person pursuing simple and natural lifestyle"
          />
          {/* Yellow Tea */}
          <FormControlLabel
            value="b"
            control={<Radio />}
            label="Dare to love, dare to hate, but occasionally a bit tangled"
          />
          {/* White Tea */}
          <FormControlLabel
            value="c"
            control={<Radio />}
            label="Cold to strangers but actually a romanticist"
          />
          {/* Black Tea */}
          <FormControlLabel
            value="d"
            control={<Radio />}
            label="Warm, enthusiastic and sociable"
          />
          {/* Dark Tea */}
          <FormControlLabel
            value="e"
            control={<Radio />}
            label="Confident and resilient"
          />
          {/* Oolong Tea */}
          <FormControlLabel
            value="f"
            control={<Radio />}
            label="Calm, generous, efficient and quality focused"
          />
        </RadioGroup>
      </Card>
    </Box>,
  ];
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
      <Card sx={{ margin: 2, padding: 2 }}>
        {questions[currentQuestion]}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          {currentQuestion > 0 && (
            <Button variant="contained" color="primary" onClick={prevQuestion}>
              Previous
            </Button>
          )}
          {currentQuestion < questions.length - 1 ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={nextQuestion}
            >
              Next
            </Button>
          ) : (
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </Box>
      </Card>
      <FootNotes />
    </Box>
  );
}

export default TeaMatch;
