import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Employee = () => {
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

  let employee = [
    {
      code: "e001",
      name: "Tom",
      gender: "Male",
      anualSalary: 5500,
      dateofBirth: "25/6/1988",
    },
    {
      code: "e002",
      name: "Sam",
      gender: "Male",
      anualSalary: 6700,
      dateofBirth: "25/11/1980",
    },
    {
      code: "e003",
      name: "Ravi",
      gender: "Male",
      anualSalary: 8900,
      dateofBirth: "27/11/1980",
    },
    {
      code: "e001",
      name: "Kaveri",
      gender: "Female",
      anualSalary: 9000,
      dateofBirth: "9/6/1991",
    },
  ];

  return (
    <div className="container mt-4">
      <h3>Employee Information</h3>
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
          {employee.map((employee, index) => (
            <tr key={index}>
              <td>{employee.code}</td>
              <td>{employee.name}</td>
              <td>{employee.gender}</td>
              <td>{employee.anualSalary}</td>
              <td>{employee.dateofBirth}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    goDetails(
                      employee.code,
                      employee.name,
                      employee.gender,
                      employee.anualSalary,
                      employee.dateofBirth
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

export default Employee;
