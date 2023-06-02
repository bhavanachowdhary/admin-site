import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./Components/Login";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import DashBoard from "./Components/Dashboard";
import Alert from "./Components/Alert";
import Details from "./Components/Client-Info/ShowClientDetails";
import Users from "./Components/User-Info/AddUsers";
import Navbar from "./Components/Navbar";
import Client1 from "./Components/Client-Info/Client1";
import User1 from "./Components/User-Info/User1";
import ShowUserDetails from "./Components/User-Info/ShowUserDetails";
import AddUser from "./Components/User-Info/AddUsers";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="client" element={<Client1 />} />
          <Route path="user" element={<User1 />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="showuserdetails/:id" element={<ShowUserDetails />} />
          <Route path="adduser" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
