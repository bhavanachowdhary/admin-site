import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");
  const gender = params.get("gender");
  const anualSalary = params.get("anualSalary");
  const dateofBirth = params.get("dateofBirth");

  let client = {
    code: id,
    name: name,
    gender: gender,
    anualSalary: anualSalary,
    dateofBirth: dateofBirth,
  };

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
            <strong>Gender:</strong> {client.gender}
            <br />
            <strong>Annual Salary:</strong> ${client.anualSalary}
            <br />
            <strong>Date of Birth:</strong> {client.dateofBirth}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
