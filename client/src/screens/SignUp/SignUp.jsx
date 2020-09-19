import React, { useState } from 'react';

import './SignUp.css'

export default function SignUp(props) {
  const [formData, updateFormData] = useState({
    username: '',
    email: '',
    password: '',
    discord:''
  })

  const { username, email, password, discord } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
      <div class='signup-container'>
    <form onSubmit={(e) => {
      e.preventDefault();
      props.registerSubmit(formData)
    }}>
      <h3 class='sign'>Sign Up here!</h3>
        <label>Username:
           <br/>
            <input
          className='username'
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
        <label>Email
         <br/>
            <input
            className='email'
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
          />
      </label>
      <br />
        <label>Password
           <br/>
          <input
          className='password'
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          />
      </label>
      <br/>
        <label>Discord
           <br/>
            <input
            className='discord'
            id='discord-field'
          type='text'
          name='discord'
          value={discord}
          onChange={handleChange}
          />
      </label>
      <br />
      <button id='signup'>Sign me up!</button>
        </form>
        </div>

  )
}