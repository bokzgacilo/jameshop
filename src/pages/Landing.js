
import { useEffect, useState } from "react";
import {Outlet, Link, useNavigate} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import landing from './style.module.css';
import { auth, logout, db } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

function Landing() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/signin");
    fetchUserName();
  }, [user, loading]);

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
          <Link to="/admin">
            <label>Admin</label>
          </Link>
        </div>
        <div className="col-3">
          {name}
          <button onClick={logout}> Signout</button>
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
