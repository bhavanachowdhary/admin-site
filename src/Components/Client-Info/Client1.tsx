import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Client } from "./ClientDetails";

const Client1 = () => {
  const navigate = useNavigate();
  const [client, setUsers] = useState<Client[]>([]);

  const goDetails = (
    code: string,
    name: string,
    permission: string,
    annualSalary: number,
    dateOfBirth: string
  ) => {
    navigate(
      `/details/${code}?name=${name}&gender=${permission}&anualSalary=${annualSalary}&dateofBirth=${dateOfBirth}`
    );
  };

  useEffect(() => {
    axios
      .get("http://localhost:5141/api/Admin/getClientList") //success  of APi Call
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      }) //if any error or failed the APi call to the Server
      .catch((err) => {
        console.log(err);
        // setErrors(err.message);
      })
      .finally(() => {
        // setLoading(false);
      });
  }, []);

  const deleteClient = (code: string) => {
    axios
      .delete(`http://localhost:5141/api/Admin/deleteClient/${code}`)
      .then((response) => {
        if (response.status === 200) {
          // Update the client-side data after successful deletion
          updateClientList(code);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateClientList = (deletedCode: string) => {
    // Update the client-side data by removing the deleted client from the list
    const updatedClientList = client.filter(
      (client) => client.code !== deletedCode
    );
    setUsers(updatedClientList);
  };

  return (
    <div className="container mt-4">
      <h3>Client Information</h3>
      <br></br>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Permission</th>
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
              <td>{client.permission}</td>
              <td>{client.annualSalary}</td>
              <td>{client.dateOfBirth}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    goDetails(
                      client.code,
                      client.name,
                      client.permission,
                      client.annualSalary,
                      client.dateOfBirth
                    )
                  }
                >
                  Details
                </button>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => deleteClient(client.code)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Client1;
