import React, { useState } from "react";

const EventHandling = () => {

    const handleClick = () => {
        alert('You clicked a Button');
    }
    // const myImg="https://image.shutterstock.com/image-vector/stock-vector-illustration-technology-futuristic-260nw-1496394446.jpg";

    let c=1;

    const [count, setCount] = useState(10);

    const updateState = () => {
        setCount( count+1 );
        console.log(count)
    }
    const [email, setEmail] = useState("")

    const [image, setImage] = useState("")

    let updateCount = () =>{
        c++;
        console.log(c);
        return c;
    }
  return (
    <div className="container">
      <h1 className="text-center">Event Handling</h1>
      <hr />
      <button
        class="btn btn-primary mt-5"
        onClick={() => {
          console.log("button clicked");
        }}
      >
        Just click it
      </button>

      <button className="btn btn-info" onClick={handleClick} >Don't Click</button>

      {/* <img src={myImg} alt=""  /> */}

      <h2>C:{c}</h2>

      <button className="btn btn-success" onClick={updateCount} > Add count</button>

      <h1>State Variable :{count}</h1>

      <button className="btn btn-warning" onClick={updateState}>Increment State</button>
      
      <input type="text" className="form-control mt-5" onChange={(event) => {
          console.log(event.target.value)
        //   console.log("value changed");
        setEmail(event.target.value)

      
        
      }} />

<h2>{email}</h2>
      <input type="text" className="form-control mt-5" onChange={(event) => {
        console.log(event.target.value)
        setImage(event.target.value)
      }} />

      <img src={image} alt="" />
      
    </div>
  );
};

export default EventHandling;






// const [myImg, setmyImg] = useState("imagee.jpg")

// changeImages=(p) => {
  // setmyImg(p)
// }

// <input type="text" className="form-control mt-5" onChange={(event) => {
//   changeImages(event.target.value)
// }} />