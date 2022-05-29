import {  Button, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";

const UpdateUser = ({userForm,loadDataFromBackend}) => {


  const userSubmit = (formdata) => {
    console.log(formdata);

    fetch("http://localhost:7000/user/update/"+userForm._id, {
      method: "PUT",
      body: JSON.stringify(formdata), //convert javascript to json
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log("data updated");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Updated successfully👍!!",
        });
        loadDataFromBackend();
      }
    });
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <Formik initialValues={userForm} onSubmit={userSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  label="UserName"
                  className="w-100"
                  id="username"
                  value={values.username}
                  onChange={handleChange}
                />

                <TextField
                  variant="outlined"
                  label="email"
                  className="w-100"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                />

                <TextField
                  variant="outlined"
                  label="password"
                  className="w-100"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                />

                <Button className="btn btn-success" type="submit">
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
