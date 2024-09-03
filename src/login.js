import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary' style={{height: '100vh'}}>
      <div className='p-3 bg-white w-25'>
        <form>
          <div className='mb-3'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder='Enter email' className='form-control' />
          </div>
          <div className='mb-3'>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder='Enter password' className='form-control' />
          </div>
          <button type='submit' className='btn btn-success'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
