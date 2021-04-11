import React from "react";
import { useCountdown } from "../hooks/useCountdown";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
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
    <main style={pageStyles}>
      <title>Countdown to the sesh</title>
      <h1 style={headingStyles}>
        Countdown to the sesh
        <br />
        <span style={headingAccentStyles}>Currently you can </span>
        <span role="img" aria-label="Party popper emojis">
          meet up to 6 people from two households
        </span>
        <h1>days {timeLeft.days}</h1>
        <h1>hours {timeLeft.hours}</h1>
        <h1>minutes {timeLeft.minutes}</h1>
        <h1>seconds {timeLeft.seconds}</h1>
      </h1>
    </main>
  );
};

export default IndexPage;
