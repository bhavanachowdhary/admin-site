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

  let employee = {
    code: id,
    name: name,
    gender: gender,
    anualSalary: anualSalary,
    dateofBirth: dateofBirth,
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <h5 className="card-header">Employee Details Page {id}</h5>
        <div className="card-body">
          <h5 className="card-title">Employee Information</h5>
          <div className="card-text">
            <strong>Code:</strong> {employee.code}
            <br />
            <strong>Name:</strong> {employee.name}
            <br />
            <strong>Gender:</strong> {employee.gender}
            <br />
            <strong>Annual Salary:</strong> ${employee.anualSalary}
            <br />
            <strong>Date of Birth:</strong> {employee.dateofBirth}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
