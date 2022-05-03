import { Button,TextField } from "@mui/material";
import React from "react";
import './LoginPage.css'
const Login = () => {
  return (
    <div className="outer">
        <div className="container-box container">
            <div className="row">
                <div className="col-6 my-auto" id="image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrww_yehbTeJ0j3J1dmY3aiy23xIa3nYHhEw&usqp=CAU" alt="" />
                    {/* <img src="https://images.unsplash.com/photo-1603969658270-33bf0b8aed81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwbGVhdmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /> */}
                    </div>
                <div className="col-6 my-auto" id="logincomp">
                    <h2>Login to your acccount</h2>
                    <form id="myform">
                        <div className="label">
                        <label htmlFor="email"><strong>Email</strong></label>
                        </div>
                        <input type="email" className="forminput" name="email"/>
                        <div className="label">
                        <label htmlFor="password"><strong>Password</strong></label>
                        </div>



                        {/* this is use of textfield from material ui--------------------> */}


                        {/* <TextField 
                        variant="outlined" 
                        className="w-100 mt-3" 
                        type="Password" 
                        label="password" 
                        helperText="enter a strong password" 
                        error={false}>

                        </TextField> */}
                        
                        
                        <input type="text" className="forminput" name="password"/>
                        <div className="inputcheck">
                        <input type="checkbox" name="check"/>
                        <label htmlFor="check">Keep me signed in</label>
                        <a href="#">forgot password?</a>
                        </div>
                        

                        <button className="btn btn_login">Submit</button>



                        {/* this is the use of button of material ui---------> */}




                        <Button
                         className="w-100 mt-3"
                         variant="contained"
                         color="error">
                             Material Button
                            </Button>

                        
                        <div className="bottom">
                            Do not have a account? Sign up <a href="/signin">here</a>
                        </div>

                        

                    </form>
                </div>
            </div>
        </div>
    </div>
  );

};
export default Login;
// sx={{color:"red/"}