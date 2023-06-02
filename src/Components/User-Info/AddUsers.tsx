import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

interface Users {
  id: number;
  username: string;
  companyID: string;
  companyName: string;
  usertype: string;
}

const AddUser = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Users>({
    id: 0,
    username: "",
    companyID: "",
    companyName: "",
    usertype: "",
  });
  const [error, setErrors] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform form submission or API request using formData
    console.log(formData);
    axios
      .post("http://localhost:5141/api/Admin/addUser", formData)
      .then((res) => {
        console.log(res.data);
        navigate("/user");
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            ID
          </label>
          <input
            type="number"
            className="form-control"
            id="id"
            name="id"
            placeholder="Enter ID"
            value={formData.id}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="companyID" className="form-label">
            Company ID
          </label>

          <input
            type="text"
            className="form-control"
            id="companyID"
            name="companyID"
            placeholder="Enter company ID"
            value={formData.companyID}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="companyName" className="form-label">
            Company Name
          </label>

          <input
            type="text"
            className="form-control"
            id="companyName"
            name="companyName"
            placeholder="Enter company name"
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="usertype" className="form-label">
            User Type
          </label>

          <input
            type="text"
            className="form-control"
            id="usertype"
            name="usertype"
            placeholder="Enter user type"
            value={formData.usertype}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
