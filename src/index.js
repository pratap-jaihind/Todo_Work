import React from "react";
import ReactDOM from "react-dom/client";
// import TodoList from "./TodoList";
// import CounterApp from "./CounterApp";
// import FormHandling from "./FormHandling";
// import LoginOut from "./LoginOut";
// import Toggle from "./Toggle";
// import StopWatch from "./StopWatch";
// import CheckBoxDel from "./CheckBoxDel";
// import FilterFruits from "./FilterFruits";
import SelectGameDays from "./SelectGameDay";
function App() {
  return (
    <>
      {/* <TodoList />{" "} */}
      {/* <CounterApp /> */}
      {/* <FormHandling /> */}
      {/* <LoginOut /> */}
      {/* <Toggle /> */}
      {/* <StopWatch /> */}
      {/* <CheckBoxDel /> */}
      {/* <FilterFruits /> */}
      <SelectGameDays />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
