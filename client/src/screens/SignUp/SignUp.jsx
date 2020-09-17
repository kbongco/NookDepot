import React, { useState } from 'react';

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
    </form>
  )
}