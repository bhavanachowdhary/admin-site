import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Users } from "./UserDetails";
const ShowUserDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  let [user, setUser] = useState<Users>();
  let [errors, setErrors] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5141/api/Admin/getuserListbyID/" + id)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => setErrors(err.message));
  }, []);
  if (!user) return <h1>No such User</h1>;
  return (
    <div>
      <br></br>
      <div className="card p-4">
        <h3>User Details Page {id}</h3>
        <div>
          User ID: {user.id}
          <br />
          Name: {user.username}
          <br />
          Company ID: {user.companyID}
          <br />
          Company Name: {user.companyName}
          <br />
          User Type: {user.usertype}
          <br />
        </div>
      </div>
      <br></br>
      <button className="btn btn-primary" onClick={() => navigate("/user/")}>
        Back
      </button>
    </div>
  );
};

export default ShowUserDetails;
