import React from "react";

const Users = () => {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">User Information</h3>
          <br></br>
          <div className="mb-3 row">
            <label
              htmlFor="colFormLabelSm"
              className="col-sm-2 col-form-label col-form-label-sm"
            >
              Username
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-control-sm"
                id="colFormLabelSm"
                placeholder="Enter username"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="colFormLabelSm"
              className="col-sm-2 col-form-label col-form-label-sm"
            >
              Company Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-control-sm"
                id="colFormLabelSm"
                placeholder="Enter company name"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="colFormLabelSm"
              className="col-sm-2 col-form-label col-form-label-sm"
            >
              User Type
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-control-sm"
                id="colFormLabelSm"
                placeholder="Enter user type"
              />
            </div>
          </div>
          <button className="btn btn-primary mt-1">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Users;
