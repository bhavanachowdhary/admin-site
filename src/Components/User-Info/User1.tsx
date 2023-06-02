import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Users } from "./UserDetails";

const UserDetails = () => {
  const navigate = useNavigate();
  const goDetails = () => {
    navigate("/showuserdetails/e001");
  };
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);
  const showDetails = (id: number) => {
    navigate("/showuserdetails/" + id);
  };
  useEffect(() => {
    axios
      .get("http://localhost:5141/api/Admin/getUserList") //success  of APi Call
      .then((res) => setUsers(res.data)) //if any error or failed the APi call to the Server
      .catch((err) => {
        setErrors(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const showUser = (user: Users) => {
    const orginalState = [...users];
    setUsers(users.filter((x) => x.id !== user.id));
    axios
      .get("http://localhost:5141/api/Admin/getuserListbyID/" + user.id)
      .catch((err) => {
        setErrors(err.message);
        setUsers(orginalState);
      });
  };
  const deleteUser = (user: Users) => {
    const orginalState = [...users];
    setUsers(users.filter((x) => x.id !== user.id));
    axios
      .get("http://localhost:5141/api/Admin/deleteUser/" + user.id)
      .catch((err) => {
        setErrors(err.message);
        setUsers(orginalState);
      });
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <div className="spiner-border">Loading....</div>}
      <div>
        <div className="container mt-4">
          <h3>User Information</h3>
          <br></br>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Company ID</th>
                <th>Company Name</th>
                <th>User Type</th>
              </tr>
            </thead>
            <tbody>
              {users.map((index) => (
                <tr key={index.id}>
                  <td>{index.id}</td>
                  <td>{index.username}</td>
                  <td>{index.companyID}</td>
                  <td>{index.companyName}</td>
                  <td>{index.usertype}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => showDetails(index.id)}
                    >
                      Details
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => deleteUser(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/adduser/")}
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
