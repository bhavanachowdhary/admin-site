import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./Components/Login";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import DashBoard from "./Components/Dashboard";
import Alert from "./Components/Alert";
import Client from "./Components/Client";
import Details from "./Components/Details";
import Users from "./Components/Users";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="emp" element={<Client />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="user" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
