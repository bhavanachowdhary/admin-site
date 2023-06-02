import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert1 from "./Alert";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  let [uname, setName] = useState("");
  let [pwd, setPwd] = useState("");
  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);

  const authenticateUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5141/api/Login/authenticateUser/${uname}/${pwd}`
      );
      const isAuthenticated = response.data;

      if (isAuthenticated) {
        localStorage.setItem("uname", uname);
        localStorage.setItem("Isauth", "true");
        navigate("/dashboard");
      } else {
        setShowAlert1(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (uname === "" || pwd === "") {
      setShowAlert2(true);
      return;
    }

    authenticateUser();
  };
  const handleReset = () => {
    setName("");
    setPwd("");
  };

  return (
    <div className="container">
      {showAlert2 && (
        <div
          className="alert alert-danger"
          onClick={() => setShowAlert2(false)}
        >
          Please enter your username and password.
        </div>
      )}
      {showAlert1 && (
        <div
          className="alert alert-danger"
          onClick={() => setShowAlert1(false)}
        >
          Invalid username and password.
        </div>
      )}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="uname">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="uname"
                    placeholder="Enter Username"
                    value={uname}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary mr-2">
                    Login
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
