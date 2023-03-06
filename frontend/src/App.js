
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from "./pages/Landing";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Admin from "./view/Admin";
import Home from "./view/Home";
import Item from "./view/Item";
import MyOrders from "./view/MyOrders";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} >
            <Route index element={<Home />} />
            <Route path="/myorders" element={<MyOrders />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/item/:id" element={<Item />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
