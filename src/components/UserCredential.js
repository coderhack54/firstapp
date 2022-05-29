import React from 'react';
import {Formik} from 'formik';
import { Button, InputLabel, MenuItem, Paper, Select, Switch, TextField } from '@mui/material';
import { Box } from '@mui/system';

const UserCredential = () => {
    const userData={
        name:"",
        age:0,
        maritalstatus:"",
        interests:"",

    }

    const userSubmit=(formdata)=>{
        console.log(formdata);
    }
  return (
    <Paper>
        <Formik initialValues={userData} onSubmit={userSubmit}>
            {({values,handleChange,handleSubmit})=>(
                <form onSubmit={handleSubmit}>
                    <Box component="div" sx={{height:"400px",width:"500px",margin:"auto",border:"2px solid black",display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <TextField
                    label="Enter your Name"
                    variant='standard'
                    id='name'
                    value={values.name}
                    onChange={handleChange} />
                    <InputLabel id='ageSelectlabel'>Age</InputLabel>
                    <Select
                    labelId='ageSelectlabel'
                    className='w-50'
                    label="Age"
                    id="age"
                    value={values.age}
                    onChange={handleChange}>
                        <MenuItem value={16}>16-18</MenuItem>
                        <MenuItem value={18}>18-25</MenuItem>
                        <MenuItem value={25}>25+</MenuItem>
                    </Select>
                    <InputLabel id="marriedswitch">Are you married?</InputLabel>
                    <Switch
                    labelId="marriedswitch"
                    id='maritalstatus'
                    value={values.maritalstatus}
                    onChange={handleChange} />
                        
                    <TextField
                    label="Tell us about your likes"
                    variant='standard'
                    id='interests'
                    value={values.interests}
                    onChange={handleChange} 
                    
                    />

                    <Button type="submit" variant="contained" color="success" className='w-20'>
                    Submit
                    </Button>
                        
                    </Box>
                </form>
            )}

        </Formik>

    </Paper>
  )
}

export default UserCredential