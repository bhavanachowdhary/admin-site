import React from "react";
import { useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

const DashBoard = () => {
  if (localStorage.getItem("Isauth") === "false") {
    return <Navigate to="/login" />;
  } else {
    return (
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Welcome</h5>
            <p className="card-text">
              Welcome to your {localStorage.getItem("uname")}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default DashBoard;
