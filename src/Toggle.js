import React from "react";
import { useState } from "react";

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <p>This is a simple toggle component.</p>
      <button onClick={() => setIsToggled(!isToggled)}>
        {isToggled ? "Off" : "On"}
      </button>
      {isToggled && <p>The toggle is ON!</p>}
    </div>
  );
}

export default Toggle;
