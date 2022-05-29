import { TextField, Button, Paper, Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import "./signupstyle.css";

// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const NewSignup = () => {
  // 1. create a form object which should match with model fields
  const userForm = {
    username: "",
    email: "",
    password: "",
    dob: new Date(),
  };

  //2. create a function for mform submission
  const userSubmit = (formdata) => {
    console.log(formdata);

    fetch("http://localhost:7000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata), //convert javascript to json
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log("data saved");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Registered successfully👍!!",
        });
      }
    });
  };

  const [value, setValue] = useState(null);

  //3. use Formik component
  return (
    <Paper className="Signup_Container">
      <div className="container w-50 Signup_innerContainer">
        <h2>Signup with ICoder!</h2>
        <Card>
          <CardContent>
            <Formik initialValues={userForm} onSubmit={userSubmit}>
              {({values,handleChange,handleSubmit})=>(

              
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

              {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Basic example"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider> */}

              <Button className="btn btn-success" type="submit">
                Submit
              </Button>
            </form>
            )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </Paper>
  );
};

export default NewSignup;
