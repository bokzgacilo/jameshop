import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import {  auth, signInWithGoogle } from "../firebase";

function Signin() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) return navigate("/");
  }, [user, loading]);

  return (
    <div class="box">
      <div class="container">
        <span class="title">Sign in</span>
        <form>
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
              <Link to="/register">
                <button button class="button-design">Register</button>
              </Link>
            </div>
          </div>
        </form>
        <div class="login-with">
          <span class="login-label">Or login with</span>
          <div class="socmed-button">
            <div class="socmedbtn">Facebook</div>
            <div class="socmedbtn" onClick={signInWithGoogle}>Google</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
