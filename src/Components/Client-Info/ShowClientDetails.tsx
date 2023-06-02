import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Client } from "./ClientDetails";
const Details = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  let [client, setClient] = useState<Client>();
  let [errors, setErrors] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5141/api/Admin/getClientListbyID/" + id)
      .then((res) => {
        console.log(res.data);
        setClient(res.data);
      })
      .catch((err) => setErrors(err.message));
  }, []);
  if (!client) return <h1>No such Clients</h1>;

  return (
    <div className="container mt-4">
      <div className="card">
        <h5 className="card-header">Client Details Page {id}</h5>
        <div className="card-body">
          <h5 className="card-title">Client Information</h5>
          <div className="card-text">
            <strong>Code:</strong> {client.code}
            <br />
            <strong>Name:</strong> {client.name}
            <br />
            <strong>Permission:</strong> {client.permission}
            <br />
            <strong>Annual Salary:</strong> ${client.annualSalary}
            <br />
            <strong>Date of Birth:</strong> {client.dateOfBirth}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
