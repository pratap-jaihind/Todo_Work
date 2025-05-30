import React from "react";
import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addTasks() {
    console.log("just Checking");
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue(""); // Clear the input field after adding the task
    }
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
    console.log("Task deleted at index:", index);
  }

  return (
    <div>
      <input
        className="input-text"
        type="text"
        placeholder="Add a new task"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button className="add-btn" onClick={addTasks}>
        {" "}
        Add Task
      </button>

      <div className="task-list">
        <ul>
          {tasks.map((task, index) => {
            return (
              <li key={index}>
                {task}{" "}
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(index)}
                >
                  {" "}
                  Delete Task
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
