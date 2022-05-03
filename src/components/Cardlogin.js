import React from 'react'
import './cardlogin.css'
const Cardlogin = () => {
    const mystyle={
            
            display:'flex',
            justifyContent:'Center',
            alignItems:'Center'
         
    }
  return (
    <div className="big" style={{display:'flex',justifyContent:'center',alignItems:'center',height:'780px',width:'100%'}}>
        <div className="card" style={{width: "20rem",height:'430px'}}>
            <img className="card-img-top" src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg" alt=""/>
            <div className="card-body">
                <h2>Sign in Here</h2>
                <form>
                <div className='inpbox' style={mystyle}>
                <input type="email" className="myinput" placeholder='Email'/>
                </div>
                <div className='inpbox' style={mystyle}>
                <input type="text" className="myinput" placeholder='Password'/>
                </div>
                <div id='forgotpass'>
                  <a href="/">Forgot password</a>
                </div>
                <div className='inpbox' style={mystyle}>
                <button className='mybtn'>Sign in</button>
                </div>
                </form>
            </div>
        </div>
        
    </div>
  )
}
export default Cardlogin;