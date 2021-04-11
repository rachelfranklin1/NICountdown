import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useCountdown } from "../hooks/useCountdown";

// styles
const pageStyles = {
  color: "#232129",
  // padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  height: "100vh",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};

// markup
const IndexPage = () => {
  const timeLeft = useCountdown();
  return (
    <>
      <GlobalStyle />
      <main style={pageStyles}>
        <title>Countdown to the sesh</title>
        <LeftPanel>
          <h1 style={headingStyles}>Countdown to the sesh</h1>
          <span style={headingAccentStyles}>Currently you can </span>
          <span role="img" aria-label="Party popper emojis">
            meet up to 6 people from two households
          </span>
        </LeftPanel>
        <RightPanel>
          <h1>days {timeLeft.days}</h1>
          <h1>hours {timeLeft.hours}</h1>
          <h1>minutes {timeLeft.minutes}</h1>
          <h1>seconds {timeLeft.seconds}</h1>
        </RightPanel>
      </main>
    </>
  );
};

const LeftPanel = styled.div`
  width: 50%;
  background-color: white;
  color: black;
  height: 100%;
`;
const RightPanel = styled.div`
  width: 50%;
  background-color: black;
  color: white;
  height: 100%;
`;

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    margin: 0; padding: 0;
  }
`;
export default IndexPage;
