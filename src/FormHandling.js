import React from "react";

function FormHandling() {
  const [nameInputValue, setNameInputValue] = React.useState("");
  const [emailInputValue, setEmailInputValue] = React.useState("");

  function showNameEmail(name, email) {
    if (name.trim() === "" || email.trim() === "") {
      alert("Please fill in both fields.");
      return;
    }
    alert(`Name: ${name}, Email: ${email}`);
    setNameInputValue("");
    setEmailInputValue("");
  }

  return (
    <div>
      <h1>Form Handling in React</h1>
      <input
        className="input-text"
        type="text"
        placeholder="Enter text here"
        value={nameInputValue}
        onChange={(e) => setNameInputValue(e.target.value)}
      />
      <input
        className="input-text"
        type="email"
        placeholder="Enter emai here"
        value={emailInputValue}
        onChange={(e) => setEmailInputValue(e.target.value)}
      />
      <button
        className="submit-btn"
        onClick={() => showNameEmail(nameInputValue, emailInputValue)}
      >
        Submit
      </button>
    </div>
  );
}

export default FormHandling;
