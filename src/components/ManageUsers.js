import { ExpandMoreOutlined } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import UpdateUser from './UpdateUser';


const ManageUsers = () => {
    
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [updateFormData, setUpdateFormData] = useState(null);

    const loadDataFromBackend = () => (
        // to send request on backend
        // 1. url 


            fetch('http://localhost:7000/user/getall')
            .then((res) => {
               
                //first check the status code
                if(res.status === 200){
                    // then extract the json data

                    res.json().then((data)=>{
                        console.log(data);
                        setUserList(data);
                        setLoading(false);
                    })
                }
                    })
       )

       const DeleteUser = (id) => {
           console.log(id);

           fetch("http://localhost:7000/user/delete/"+id , {
               method: 'DELETE',
           })
           .then((res)=>{
               if(res.status === 200) {
                   toast("Item Deleted!!",{
                       icon: "👽",
                   });
                   loadDataFromBackend();
               }
           })
       }

       const updateUser = (userdata) => {
            // change the value of show update to true
            setShowUpdateForm(true);

            //update the user form data
            setUpdateFormData(userdata);
       }
    
       useEffect(() => {
         loadDataFromBackend();
       }, []);

       const displayData = () => {
           if(!loading){
               
               return userList.map((userdata)=>(
                <Accordion key={userdata._id}>
                    <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                         <h4>{userdata.email}</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <h4>{userdata.username}</h4>
                        <h4>{userdata.password}</h4>
                        <h4>{userdata._id}</h4>
                        <button className='btn btn-danger' onClick={(e)=>{DeleteUser(userdata._id)}}> <i class="fa fa-trash" aria-hidden="true"></i> Delete </button>
                        &nbsp;
                        <button className='btn btn-primary' onClick={(e)=>{updateUser(userdata)}}> <i class="fa fa-pen" aria-hidden="true"></i> Edit </button>
                    </AccordionDetails>
                </Accordion>
              
               ))
           }
           else{
            return <h1>still loading..</h1>
           }
       }
       

    return (
    <div>
        <h1>
            Manage users
        </h1>
        <div className='container'>  {displayData()}</div>
        {
            showUpdateForm? (
                <div>
                    <button className="btn btn-primary float-end"
                    onClick={(e)=> setShowUpdateForm(false)}>
                        Cancel  
                    </button>
                    <UpdateUser
                    userForm={updateFormData}
                    loadDataFromBackend={loadDataFromBackend}/>
                </div>
            ):("")
        }
        
    </div>
  )
}

export default ManageUsers