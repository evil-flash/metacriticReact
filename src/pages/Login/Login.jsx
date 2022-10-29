import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [errorName, setErrorName] = useState("");
  const [colorError, setColorError] = useState(false);

  const handleErrorName = (e) => {
    if (e.target.value.length < 3) {
      setErrorName("<3");
      setColorError(false)
    } else {
      setErrorName("more4");
      setColorError(true);
    }
  };

  return (
    <div>
      <div style={colorError ? { color: "green" } : { color: "red" }}>
        {errorName}
      </div>
      <div>
        <label>Username</label>
        <input onChange={handleErrorName} type="text" />
      </div>
      <div>
        <lable>Password</lable>
        <input type="text" />
      </div>
      <Link to={"/"}>
        <button disabled={!colorError}>Send</button>
      </Link>
    </div>
  );
}

export default Login;
