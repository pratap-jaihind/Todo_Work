import React, { useState } from "react";

function CheckBoxDel() {
  const [isChecked, setIsChecked] = useState({});
  const [arr, setArr] = useState([
    "Play Football",
    "Play Cricket",
    "Play Tennis",
  ]);

  function deleteElement(index) {
    const newArr = arr.filter((_, i) => i != index);
    setArr(newArr);
  }

  function handleChange(index, e) {
    setIsChecked((prev) => {
      return { ...prev, [index]: e.target.checked };
    });
  }

  return (
    <div>
      <ul>
        {arr.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <input
                type="checkbox"
                checked={isChecked[index] || false}
                onChange={(e) => {
                  handleChange(index, e);
                }}
              />
              {isChecked[index] && (
                <button
                  onClick={() => {
                    deleteElement(index);
                  }}
                >
                  {" "}
                  Delete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CheckBoxDel;
