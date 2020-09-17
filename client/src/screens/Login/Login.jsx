import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layouts/Layout.jsx'
import './Login.css'

export default function Login(props) {
  const [formData, updateFormData] = useState({
    username: '',
    password: ''
  })

  const { username, password } = formData;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <Layout>
        <h3 class='login'>Login here!</h3>
    <form onSubmit={(e) => {
      e.preventDefault();
      props.loginSubmit(formData);
    }}>
      <label>Username:
       <br />
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
        </label>
        <br/>
      <label>Password:
       <br/>
      <input
        type='password'
        name='password'
        value={password}
        onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
    </Layout>
  )
}
