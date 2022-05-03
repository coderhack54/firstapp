import React, { useState } from 'react'

const PracticeEvents = () => {
    let a=1;
    const handleClick=()=>{
        alert("Why the hell on Earth did you click on this button!!!")
    }
    // const calClick= () =>{
    //     a++;
    //     console.log(a);
    //     return a;
    // }

    const updateChange = () => {
        setNum(num+1);
        console.log(num)


    }
    const [num, setNum] = useState(a)
    const sp=0;
    const [speed, setSpeed] = useState(sp);
    const updateSpeed = () => {
        setSpeed(speed+1);

    }
    
  return (
    <div>
        <div className="something">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque soluta ut minima hic consequuntur, expedita, quasi illum corporis odio rem repellendus quo aliquid sunt id odit error repudiandae culpa. Quo, iure eveniet!
            <button className='btn btn-danger' onClick={handleClick}>accept</button>
            <h1>{num}</h1>
            <button className='btn-primary' onClick={updateChange}>Click</button>

            <input type="text" className='form-control mt-4' onChange= {updateSpeed} />
            <h4>{speed}</h4>
        </div>
        
    </div>
  )
}

export default PracticeEvents