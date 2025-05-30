import React, { useState } from "react";

function LoginOut() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>
        {isLoggedIn ? "Welcome Back to this plateform" : "You need to login"}
      </h1>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default LoginOut;
