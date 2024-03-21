import React, { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 className="time">{time}</h1>
      </div>
    </div>
  );
}

export default App;
