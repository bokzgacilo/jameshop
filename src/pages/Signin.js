import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {  auth, signInWithGoogle } from "../firebase";

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
      </div>
    </>
  );
}

export default Signin;
