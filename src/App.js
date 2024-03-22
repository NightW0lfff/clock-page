import React, { useEffect, useState, useRef } from "react";

function App() {
  const [time, setTime] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 className="time">{time}</h1>
        <AnalogClock />
      </div>
    </div>
  );
}

function AnalogClock() {
  const time = new Date();
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondHandRotation = 270 + seconds * 6;
  const minuteHandRotation = 270 + minutes * 6 + seconds * 0.1;
  const hourHandRotation = 270 + (hours % 12) * 30 + minutes * 0.5;
  console.log(secondHandRotation);
  return (
    <div className="clock">
      <div
        className="hand hour"
        style={{ transform: `rotate(${hourHandRotation}deg)` }}
      ></div>
      <div
        className="hand minute"
        style={{ transform: `rotate(${minuteHandRotation}deg)` }}
      ></div>
      <div
        className="hand second"
        style={{ transform: `rotate(${secondHandRotation}deg)` }}
      ></div>
    </div>
  );
}

export default App;
