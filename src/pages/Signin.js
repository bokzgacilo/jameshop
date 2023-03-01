import { Checkbox } from "@mui/material";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {  auth, signInWithGoogle } from "../firebase";

<<<<<<< HEAD
function Signin () {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if(loading) {
      return;
    }

    if(user){
      navigate('/')
    };

  }, [user, loading]);


  return (
    <>
      <h2>Signin</h2>
      <div>
        <button onClick={signInWithGoogle}>Google</button>
=======
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
    <div class="box">
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
>>>>>>> 45c4fd3e9b5835c2f39e7e4ece451097b4509e2f
      </div>
    </div>
  );
}

export default Signin;
