import React, { useState, useRef } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const ref = useRef(null);

  function startTimer() {
    if (!isRunning) {
      setIsRunning(true);
      ref.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      console.log(ref.current);
    }
  }

  function stopTimer() {
    if (isRunning) {
      clearInterval(ref.current);
      setIsRunning(false);
    }
  }
  function resetTimer() {
    clearInterval(ref.current);
    setTime(0);
    setIsRunning(false);
  }

  return (
    <div>
      <h1>{time}</h1>
      <button className="start-btn" onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button className="stop-btn" onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <button className="reset-btn" onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
}

export default StopWatch;
