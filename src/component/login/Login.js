import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='container'>
      <div className='box'>
        <h1 >Sign in</h1>
        <button type="button" className="btn btn-primary ">Sign in with Linkedin</button>
        <button type="button" className="btn btn-secondary ">Sign in with google</button>
        <div style={{ marginTop: '2rem' }} className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Name</label>
        <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="your name" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">password</label>
        <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="password" />
      </div>
     
      <div className='button'>
        <div className="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-primary" type="button">Sign Up</button>
          

        </div>
      </div>
      </div>

    </div>
  )
}

export default Login
