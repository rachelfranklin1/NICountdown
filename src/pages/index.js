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

const IndexPage = () => {
  const timeLeft = useCountdown();
  return (
    <>
      <GlobalStyle />
      <div
        style={{
          display: "flex",
        }}
      >
        <LeftHeader>
          <Heading color={"#44af7b"}>Countdown to</Heading>
        </LeftHeader>
        <RightHeader>
          <Heading color={"white"}>social events</Heading>
        </RightHeader>
      </div>
      <main style={pageStyles}>
        <title>Countdown to the social events</title>
        <LeftPanel>
          <h1>You can now meet up to 6 people outdoors, from two households</h1>
        </LeftPanel>
        <RightPanel>
          <Section>
            <Box>{pluralize(timeLeft.days, "day")}</Box>
            <Box>{pluralize(timeLeft.hours, "hour")}</Box>
            <Box>{pluralize(timeLeft.minutes, "minute")}</Box>
            <Box>{pluralize(timeLeft.seconds, "second")}</Box>
          </Section>
        </RightPanel>
      </main>
    </>
  );
};
const LeftHeader = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
`;
const RightHeader = styled.div`
  width: 50%;
  height: 50px;
  background-color: #44af7b;
  color: white;
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
  background-color: #44af7b;
  color: white;
  height: 100%;
  font-family: "Open Sans";
  display: flex;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 25%;
  font-size: 2em;
  padding: 5%;
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  padding: 0 10px;
  height: 100%;
  text-decoration: underline ${(props) => props.color};
`;

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    margin: 0; padding: 0;
    font-family: "Open Sans";
    overflow: hidden;
  }
`;
export default IndexPage;

function pluralize(number, unit) {
  if (number > 1) {
    return `${number} ${unit}s`;
  }
  return `${number} ${unit}`;
}
