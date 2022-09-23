import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import "./App.css";
import "./index.css"



import Home from "./components/common/Home";
import Current from "./components/common/Current";
import Profile from "./components/common/Profile";
import BLoginNavbar from "./components/templates/UserNavbar";
import Random from "./components/common/Random";
import Welcome from "./components/common/welcome";
import Register from "./components/common/Register";
import Welcome2 from "./components/common/Welcome2";
import BLogout from "./components/common/logout";
// import Alltabl from "./components/common/table";
// import { Table } from "@mui/material";
import Tablee from "./components/common/table";

const Layout = () => {
  return (
    <div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>          
          <Route path="current" element={<Current />} />
          <Route path="profile" element={<Profile />} />

          <Route path="login" element={<Register />} />
          <Route path="/" element={<Welcome/>} />
          <Route path="/random" element={<Random/>} />
          <Route path="/welcome2" element={<Welcome2/>} />
          <Route path="/logout" element={<BLogout/>} />
          <Route path="/viewall" element={<Home/>} />
          <Route path="/table" element={<Tablee/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
