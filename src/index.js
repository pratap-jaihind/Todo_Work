import React from "react";
import ReactDOM from "react-dom/client";
import TodoList from "./TodoList";
import CounterApp from "./CounterApp";
import FormHandling from "./FormHandling";

function App() {
  return (
    <>
      {/* <TodoList />{" "} */}
      {/* <CounterApp /> */}
      <FormHandling />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
