import React from 'react'

const Singup = () => {
  return (
    <div className='container'>

      <div style={{ marginTop: '2rem' }} className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Name</label>
        <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="your name" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="password" />
      </div>
      <div className='button'>
        <div className="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-primary" type="button">Sign Up</button>
          <h3>Already have an account? <span style={{ color: 'blue' }}>Sign Up </span></h3>

        </div>
      </div>

    </div>
  )
}

export default Singup
