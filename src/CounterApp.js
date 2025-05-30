import React from "react";

function CounterApp() {
  const [count, setCount] = React.useState(0);
  function incrementBtn(count) {
    setCount(count + 1);
  }

  function decrementBtn(count) {
    setCount(count - 1);
  }

  return (
    <div>
      <h1> This is a counter app</h1>
      <button className="counter-btn" onClick={() => incrementBtn(count)}>
        Increment
      </button>
      {count}
      <button className="counter-btn" onClick={() => decrementBtn(count)}>
        Decrement
      </button>
    </div>
  );
}

export default CounterApp;
