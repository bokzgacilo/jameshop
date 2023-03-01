import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signin () {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    if(name === 'testing' || password === 'testing'){
      alert('signed')
      sessionStorage.setItem('issigned', true)
      navigate('/');
    }else {
      alert('not signed')
    }
  }

  return (
    <>
      <h2>Signin</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setName(e.target.value)} type="text" placeholder="email" />
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
          <button>Sign In</button>
          <button>Register</button>
        </form>
        <h5>Or you can sign as</h5>
        <button>Facebook</button>
        <button>Google</button>
      </div>
    </>
  );
}

export default Signin;
