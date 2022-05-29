import { TextField } from '@mui/material';
import React from 'react';
import {Formik} from 'formik';
import Swal from 'sweetalert2';

const memeCreator = () => {
    const memeForm={
        title:"",
        author:"",
        file:"",
    };

    const memeSubmit = (formdata)=>{
        console.log(formdata);

        };


    // to connect frontend with backend
    // 1. url      
    //2. request method
    // 3. data send
    // 4. data format

   
  return (
    <div>
        <h1>MemeCreator</h1>
        <Formik initialValues={memeCreator} onSubmit={memeSubmit}>
        {({values,handleChange,handleSubmit})=>(
            <form onSubmit={handleSubmit}>

                <TextField label="Meme title" id="title" value={values.title} onChange={handleChange}/>
                <TextField label="Meme Author" id="author" value={values.author} onChange={handleChange}/>

                <button className='btn btn-success'>Submit</button>

            </form>
        )}

        </Formik>

    </div>
  )
}

export default memeCreator