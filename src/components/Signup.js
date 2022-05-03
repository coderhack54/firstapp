import React from 'react'
import './signupstyle.css'
import img from './bg.jpg';

const Signup = () => {
    return (
        <div id="content-box">
            <div className='container signupbox'>
                <div className="left">
                    {/* <img src="https://i.pinimg.com/236x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg" alt="" /> */}
                    <img src="https://images.pexels.com/photos/5081970/pexels-photo-5081970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="right">
                <h3 id="heading">Start your journey with us now</h3>
                <h4>Create your free account </h4>
                {/* <div className="card mx-auto " style={{ width: '50%' }}>

                    <div className="form-floating mb-3 namebox">
                        <div className="name form-floating mt-2">
                        <input type="text" class="form-control" id="floatingInput" placeholder="First Name" />
                        <label for="floatingInput">First Name</label>
                        </div>
                        <div className="name form-floating mt-2">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Last Name" />
                        <label for="floatingInput">Last Name</label>
                        </div>

                    </div>
                    <div className="form-floating mb-3">
                        <input type="date" class="form-control" placeholder="DOB"/>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">**********</label>
                    </div>
                    <div className="btn btn-signup">Submit</div>
                </div> */}
                <div className="form">
                    <div class="row mx-2">
                        <div class="col">
                            <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                        </div>
                        <div class="col">
                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                        </div>
                    <div class="row mx-2 mt-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />

                    </div>
                    </div>
                </div>

                </div>
            </div>
        </div>

            )
        }

        export default Signup