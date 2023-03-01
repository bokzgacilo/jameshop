
import { useEffect } from "react";
import {Outlet, Link, useNavigate} from "react-router-dom";
import landing from './style.module.css';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Item from '@mui/material/Item';

function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(sessionStorage.getItem('issigned'))
    if(sessionStorage.getItem('issigned') === false || sessionStorage.getItem('issigned') === null){
      navigate('/signin');
    }
  });

  const handleSignout = () => {
    sessionStorage.clear();
    navigate('/signin');
  }
 
  return (
    <>
      <header className={landing.headbar}>
        <h4 className="col-2">Jameshop</h4>
        <div className="navigator col">
          <Link to="/">
            <label>Home</label>
          </Link>
          <Link to="/myorders">
            <label>My Orders</label>
          </Link>
        </div>
        <div className="col-1">
          <button onClick={handleSignout}>Signout</button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Jameshop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                <Link to="/">Home</Link>
              </a>
              <a className="nav-link" href="#">
                <Link to="/myorders">My Orders</Link>
              </a>
            </div>
          </div>
        </div>
      </nav> */}
      

    </>
  );
}

export default Landing;
