import React from 'react'
import { NavLink,useNavigate} from 'react-router-dom'
import img from './logo.png'
import { Switch } from "@mui/material";


export default function Header({darkTheme,setDarkTheme}) {     //accepting the props
  let navigate = useNavigate();
  const changeRoute = () => {
    let path=`signup`
    navigate(path);
  }
  const changeRoute1 = () => {
    let path=`login`
    navigate(path);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/signup">
      <img src={img} alt="" className='Company_logo' />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/home">Home</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/EventHandling">Event</NavLink>
        </li>

        <li className='nav-item'>
          <NavLink className="nav-link" to="/typing"> test your speed</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className="nav-link" to="/gallery"> Gallery</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className="nav-link" to="/list"> Products</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className="nav-link" to="/flipkart"> Flipkart</NavLink>
        </li>
        <li className="nav-item">
          <Switch checked={darkTheme} onChange={ 
            (e,v)=>{
              setDarkTheme(v);
              console.log(e.target.value)
              // console.log(v)
            }
          }/>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <button className='btn btn-dark mx-2' id='loginbtn' onClick={changeRoute1}>Login</button>
      <button className='btn btn-success mx-2' id='signupbtn' onClick={changeRoute}>Signup</button>

     
    </div>
  </div>
</nav>
  </>
  )
}
