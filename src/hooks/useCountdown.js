import { useState, useEffect } from "react";

function getTimeLeft() {
  // test date = 5th of May, 2021
  const difference = +new Date(`05/01/${2021}`) - +new Date();
  // returns the total number of milliseconds
  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
}

export function useCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return timeLeft;
}
