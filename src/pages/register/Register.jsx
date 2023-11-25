import React from 'react'

import './register.css'

export default function Register() {
  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <form className='registerForm'>
        <label>Username:</label>
        <input type='text' className='registerInput' placeholder='Username' />
        <label>Email:</label>
        <input type='text' className='registerInput' placeholder='Enter your Email' />
        <label>Password:</label>
        <input type='password' className='registerInput' placeholder='Enter your Password' />
        <button className='registerButton'>Register</button>
      </form>
      <button className='registerLoginButton'>Login</button>
    </div>
  )
}