import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Client = () => {
  const navigate = useNavigate();

  const goDetails = (
    code: string,
    name: string,
    gender: string,
    anualSalary: number,
    dateofBirth: string
  ) => {
    navigate(
      `/details/${code}?name=${name}&gender=${gender}&anualSalary=${anualSalary}&dateofBirth=${dateofBirth}`
    );
  };

  let client = [
    {
      code: "1",
      name: "Tom",
      gender: "Male",
      anualSalary: 5500,
      dateofBirth: "25/6/1988",
    },
    {
      code: "2",
      name: "Sam",
      gender: "Male",
      anualSalary: 6700,
      dateofBirth: "25/11/1980",
    },
    {
      code: "3",
      name: "Ravi",
      gender: "Male",
      anualSalary: 8900,
      dateofBirth: "27/11/1980",
    },
    {
      code: "4",
      name: "Kaveri",
      gender: "Female",
      anualSalary: 9000,
      dateofBirth: "9/6/1991",
    },
  ];

  return (
    <div className="container mt-4">
      <h3>Client Information</h3>
      <br></br>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Salary</th>
            <th>DOB</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {client.map((client, index) => (
            <tr key={index}>
              <td>{client.code}</td>
              <td>{client.name}</td>
              <td>{client.gender}</td>
              <td>{client.anualSalary}</td>
              <td>{client.dateofBirth}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    goDetails(
                      client.code,
                      client.name,
                      client.gender,
                      client.anualSalary,
                      client.dateofBirth
                    )
                  }
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={() => navigate("/user/")}>
        Add User
      </button>
    </div>
  );
};

export default Client;
