import { AccountCircle, EmailOutlined, Label, Visibility, VisibilityOff } from '@mui/icons-material'
import { Box,Card, Grid,CardContent, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const UsingMaterial = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div style={{height:"100vh",background:"#ccc"}}>
        <h1>UsingMaterial</h1>
        {/* Box element renders to the component which is given to it as a prop */}
        <Box component="div" sx={{display:"flex",justifyContent:"center"}}>
        <Card sx={{minWidth:"300px",width:"500px"}}>
            <CardContent>
                <Typography variant="h3" sx={{my:5,textAlign:"center"}} >
                    Login Here
                </Typography>

                <TextField
                fullWidth
                label="Email"
                variant="standard"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <IconButton>
                            <EmailOutlined />
                            </IconButton>
                          
                        </InputAdornment>
                      ),
                }}
                />
                <TextField
                fullWidth
                type={showPassword? "text":"password"}
                label="Password"
                variant="standard"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <IconButton onClick={(e)=> setShowPassword(!showPassword)}>
                            {showPassword? <Visibility/>:<VisibilityOff/>}
                            </IconButton>
                          
                        </InputAdornment>
                      ),
                }}
                />

               
           
            </CardContent>
        </Card>
        </Box>

        <Grid container sx={{}}>
            <Grid item md={3} lg={3} className="bg-primary">
                <h1>Column 1</h1>
            </Grid>
            <Grid item md={3} lg={3} className="bg-success">
                <h1>Column 2</h1>
            </Grid>
            <Grid item md={3} lg={3} className="bg-danger">
                <h1>Column 3</h1>
            </Grid>
            <Grid item md={3} lg={3} className="bg-info">
                <h1>Column 4</h1>
            </Grid>
            
         </Grid>
    </div>
  )
}

export default UsingMaterial