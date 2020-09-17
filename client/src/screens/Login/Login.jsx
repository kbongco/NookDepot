import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout.jsx";
import "./Login.css";

export default function Login(props) {
  const [formData, updateFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <h3 class="login">Login here!</h3>
      <div className="login-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.loginSubmit(formData);
          }}
        >
          <label>
            Username:
            <br />
            <input
              className="username"
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <br />
            <input
              id='password-field'
              className="password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <br />
          <button id='submit'>Submit</button>
        </form>
      </div>
      </>
  );
}
