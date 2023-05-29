import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import Dashboard from "./Dashboard";
import ReactDOM from "react-dom";

const Login = () => {
  const navigate = useNavigate();
  let [uname, setName] = useState("");
  let [pwd, setPwd] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const doLogin = () => {
    if (uname === "" || pwd === "") {
      alert("Username and Password cannot be blank!");
      return;
    }
    if (uname === "admin" && pwd === "admin") {
      localStorage.setItem("uname", uname);
      localStorage.setItem("Isauth", "true");
      navigate("/dashboard/");
    } else {
      setShowAlert(true);
    }
  };

  const handleReset = () => {
    setName("");
    setPwd("");
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div className="container">
      {showAlert && (
        <div className="alert alert-danger alert-dismissible" role="alert">
          Login not successful. Please try again.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={handleAlertClose}
          ></button>
        </div>
      )}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title ">Login</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="uname">Username</label>
                  <input
                    type="uname"
                    className="form-control"
                    id="uname"
                    placeholder="Enter Username"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <br></br>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    onChange={(e) => setPwd(e.target.value)}
                  />
                </div>
                <br></br>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-primary mr-2"
                    onClick={doLogin}
                  >
                    Login
                  </button>
                  <button
                    type="reset"
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
function setName(arg0: string) {
  throw new Error("Function not implemented.");
}

function setPwd(arg0: string) {
  throw new Error("Function not implemented.");
}

function setShowAlert(arg0: boolean) {
  throw new Error("Function not implemented.");
}
