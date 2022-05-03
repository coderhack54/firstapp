import { TextField, Button, Paper } from "@mui/material";
import React from "react";
import { Formik } from "formik";

const NewSignup = () => {
  // 1. create a form object which should match with model fields
  const userForm = {
    username: "",
    email: "",
    contact: "",
    age: 0,
    password: "",
  };

  //2. create a function for mform submission
  const userSubmit = (formdata) => {
    console.log(formdata);
  };

  //3. use Formik component
  return (
    <Paper>
    <div className="container">
      <h2>Signup here</h2>
      <hr className="mb-5" />

      <Formik initialValues={userForm} onSubmit={userSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              className="w-100 mb-4"
              id="username"
              onChange={handleChange}
              value={values.username}
            />
            <TextField
              label="Email"
              variant="outlined"
              className="w-100 mb-4"
              id="email"
              onChange={handleChange}
              value={values.email}
            />
            <TextField
              label="Password"
              variant="outlined"
              className="w-100 mb-4"
              id="password"
              onChange={handleChange}
              value={values.password}
            />
            <TextField
              label="Phone No."
              variant="outlined"
              className="w-100 mb-4"
              id="contact"
              onChange={handleChange}
              value={values.contact}
            />
            <Button type="submit" variant="contained" color="error">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
    </Paper>
  );
};

export default NewSignup;
