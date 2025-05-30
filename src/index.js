import React from "react";
import ReactDOM from "react-dom/client";
import TodoList from "./TodoList";
import CounterApp from "./CounterApp";

function App() {
  return (
    <>
      {/* <TodoList />{" "} */}
      <CounterApp />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
