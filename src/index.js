import React from "react";
import ReactDOM from "react-dom/client";
import TodoList from "./TodoList";
import CounterApp from "./CounterApp";
import FormHandling from "./FormHandling";
import LoginOut from "./LoginOut";

function App() {
  return (
    <>
      {/* <TodoList />{" "} */}
      {/* <CounterApp /> */}
      {/* <FormHandling /> */}
      <LoginOut />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
