import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert1 from "./Alert";

const Login = () => {
  const navigate = useNavigate();
  let [uname, setName] = useState("");
  let [pwd, setPwd] = useState("");
  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);

  const doLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (uname === "" || pwd === "") {
      setShowAlert2(true);
      return;
    }
    if (uname === "admin" && pwd === "admin") {
      localStorage.setItem("uname", uname);
      localStorage.setItem("Isauth", "true");
      navigate("/dashboard/");
    } else {
      setShowAlert1(true);
    }
  };

  const handleReset = () => {
    setName("");
    setPwd("");
  };

  return (
    <div className="container">
      {showAlert2 && (
        <Alert1 onClick={() => setShowAlert2(false)}>
          Please Enter your userName and Password
        </Alert1>
      )}
      {showAlert1 && (
        <Alert1 onClick={() => setShowAlert1(false)}>
          Invalid UserName and password
        </Alert1>
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
