import { Checkbox } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "testing" || password === "testing") {
      alert("signed");
      sessionStorage.setItem("issigned", true);
      navigate("/");
    } else {
      alert("not signed");
    }
  };

  return (
    <>
      <div class="container">
        <span class="title">Sign in</span>
        <form onSubmit={handleSubmit}>
          <div class="form">
            <input
              class="inputs"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Email"
            />
            <input
              class="inputs"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <div class="forgot-container">
              <div class="checkbox">
                <input type="checkbox" />
                <span class="checkbox-label">Remember me</span>
              </div>
              <span class="forgot">Forgot?</span>
            </div>
            <div class="button-container">
              <button class="button-design">Sign In</button>
              <button class="button-design">Register</button>
            </div>
          </div>
        </form>
        <div class="login-with">
          <span class="login-label">Or login with</span>
          <div class="socmed-button">
            <div class="socmedbtn">Facebook</div>
            <div class="socmedbtn">Google</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
