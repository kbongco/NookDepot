import React, { useState } from 'react';
import Layout from '../../layouts/Layout.jsx'

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
    <Layout>
    <form onSubmit={(e) => {
      e.preventDefault();
      props.registerSubmit(formData)
    }}>
      <h3>Sign Up here!</h3>
      <label>Username:
       <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
        <label>Email
         <input 
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
          />
      </label>
      <br />
      <label>Password
       <input 
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          />
      </label>
      <br/>
      <label>Discord
       <input 
          type='text'
          name='discord'
          value={discord}
          onChange={handleChange}
          />
      </label>
      <br />
      <button>Sign me up!</button>
      </form>
      </Layout>
  )
}