import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Exclude login page from displaying the navbar
  if (location.pathname === "/login/" || location.pathname === "/") {
    return null;
  }
  const navigate = useNavigate();
  const goClient = () => {
    navigate("/client");
  };
  const goUser = () => {
    navigate("/user");
  };
  const doLogout = () => {
    localStorage.removeItem("Isauth");
    navigate("/login/");
  };

  if (localStorage.getItem("Isauth") === "false") {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <nav className="navbar bg-primary" data-bs-theme="dark">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                DashBoard
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/dashboard">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={goClient}>
                      Clients
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={goUser}>
                      Users
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={doLogout}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </nav>
      </div>
    );
  }
};

export default Navbar;
