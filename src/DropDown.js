import React, { useState } from "react";

function Dropdown() {
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <label>Select an option: </label>
      <select value={selected} onChange={handleChange}>
        <option value="">-- Choose --</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
      <p>Selected: {selected}</p>
    </div>
  );
}

export default Dropdown;
