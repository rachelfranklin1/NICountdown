import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useCountdown } from "../hooks/useCountdown";
import "@fontsource/open-sans";

// styles
const pageStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  height: "100vh",
};

// markup
const IndexPage = () => {
  const timeLeft = useCountdown();
  return (
    <>
      <GlobalStyle />
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LeftHeader>Countdown to</LeftHeader>
        <RightHeader>the sesh</RightHeader>
      </div> */}
      <main style={pageStyles}>
        <title>Countdown to the sesh</title>
        <LeftPanel>
          <h1>You can now meet up to 6 people from two households</h1>
        </LeftPanel>
        <RightPanel>
          <Box>{pluralize(timeLeft.days, "day")}</Box>
          <Box>{pluralize(timeLeft.hours, "hour")}</Box>
          <Box>{pluralize(timeLeft.minutes, "minute")}</Box>
          <Box>{pluralize(timeLeft.seconds, "second")}</Box>
        </RightPanel>
      </main>
    </>
  );
};
const LeftHeader = styled.header`
  width: 100%;
  height: 50px;
`;
const RightHeader = styled.header`
  width: 100%;
  height: 50px;
`;
const LeftPanel = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 0 5%;
  background-color: white;
  color: black;
  height: 100%;
  font-family: "Open Sans";
`;
const RightPanel = styled.div`
  width: 50%;
  padding: 0 5%;
  background-color: black;
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans";
`;

const Box = styled.div`
  width: 25%;
  font-size: 2em;
  padding: 5%;
`;

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    margin: 0; padding: 0;
  }
`;
export default IndexPage;

function pluralize(number, unit) {
  if (number > 1) {
    return `${number} ${unit}s`;
  }
  return `${number} ${unit}`;
}
