//1.You must create a function
//2.Function names should start with upper case letter
//3. Function should contain a top level return statement
// with atleast single JSX tag
//4. Function should be exported and then added to the App.js file

// rafce is the shoortcut to create a exporting function
import React from 'react'
import './home.css'

const Home = () => {

    let myhobbies ="Coding and gaming";
    const btn= <button style={{background : 'green', color:'white', padding:'12px','border-radius':'10px'}}>a custom button</button>;
    const btnStyles={
        background:'red',
        borderRadius:'5px',
        border:'none',
        color:'white',
        padding:'10px',
        boxshadow:'23px 14px'
    };
    const btn2=<button style={btnStyles}>More buttons </button>;
    
  return (
    <div>
        {btn2}
        <h1>Home components</h1>
        <h2 className="mytext">{myhobbies}</h2>
        {btn}
    </div>
  )
};


export default Home