import React, { useState } from "react";
import { Button, Input, Paper, TextField } from "@mui/material";
import { Formik } from "formik";
import { GoogleLogin } from "react-google-login";

import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import OutlinedInput from "@mui/material/OutlinedInput";

import "./LoginPage.css";
import Swal from "sweetalert2";
const Login = () => {
  const userForm = {
    email: "",
    password: "",
  };

  const userSubmit = (formdata) => {
    fetch("http://localhost:7000/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => {
      if (res.status == 200) {
        console.log("data saved");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Login Success!!👍",
        });
        res.json().then((data) => {
          console.log(data);

          sessionStorage.setItem("user", JSON.stringify(data)); // this function is inbuilt in browser api used to store data in session storage
        });
      } else if (res.status == 400) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Login Failed!!👍",
        });
      }
    });
  };

  const [showPassword, setShowPassword] = useState(false);

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Paper className="outer">
      <div className="container-box container">
        <div className="row">
          <div className="col-6 my-auto" id="image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrww_yehbTeJ0j3J1dmY3aiy23xIa3nYHhEw&usqp=CAU"
              alt=""
            />
            {/* <img src="https://images.unsplash.com/photo-1603969658270-33bf0b8aed81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwbGVhdmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /> */}
          </div>
          <div className="col-6 my-auto" id="logincomp">
            <h2>Login to your acccount</h2>
            <GoogleLogin
              clientId="875936760802-qfrn39cgs43it141k67iojfc3664pvr8.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={(data) => {
                console.log("login successful");
                console.log(data);
              }}
              onFailure={(data) => {
                console.log("login failed");
                console.log(data);
              }}
              cookiePolicy={"single_host_origin"}
            />
            
            <Formik initialValues={userForm} onSubmit={userSubmit}>
              {({ values, handleChange, handleSubmit }) => (
                <form id="myform" onSubmit={handleSubmit}>
                  <div className="label">
                    <label htmlFor="email">
                      <strong>Email</strong>
                    </label>
                  </div>
                  <input
                    type="email"
                    className="forminput"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  <div className="label">
                    <label htmlFor="password">
                      <strong>Password</strong>
                    </label>
                  </div>

                  <FormControl sx={{ m: 1, width: "50ch" }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      type={showPassword ? "text" : "password"}
                      id="password"
                      onChange={handleChange}
                      value={values.password}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={(e) => setShowPassword(!showPassword)}
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>

                  <div className="inputcheck">
                    <input type="checkbox" name="check" />
                    <label htmlFor="check">Keep me signed in</label>
                    <a href="#">forgot password?</a>
                  </div>

                  <button className="btn btn_login">Submit</button>

                  {/* this is the use of button of material ui---------> */}

                  {/* 
                        <Button
                         className="w-100 mt-3"
                         variant="contained"
                         color="error">
                             Material Button
                            </Button> */}

                  <div className="bottom">
                    Do not have a account? Sign up <a href="/signin">here</a>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Paper>
  );
};
export default Login;
// sx={{color:"red/"}
