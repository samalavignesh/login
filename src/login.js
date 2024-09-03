import React from 'react'

function login() {
  return (
    <div>
        <div>
            <form action="">
                <div>
                        <label htmlFor="name">Email</label>
                        <input type="email" placeholder='Enter email'/>
                </div>
                <div>
                        <label htmlFor="name">Password</label>
                        <input type="password" placeholder='Enter password'/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default login