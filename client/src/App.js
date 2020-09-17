import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory} from 'react-router-dom'

import MainContainer from './containers/MainContainer.jsx'

import SignUp from './screens/SignUp/SignUp'
import Login from './screens/Login/Login'
import Layout from './layouts/Layout'

import { loginUser, registerUser, verifyUser, removeToken } from './services/auth'

import './App.css';


function App() {
  const [currentUser, updateCurrentUser] = useState(null)
  const history = useHistory();

  useEffect(() => {

    // const loggedInUser = localStorage.getItem('authToken');
    // if (loggedInUser) {
    //   const foundUser = JSON.parse(loggedInUser);
    //   updateCurrentUser(foundUser)
    // }
    const handleVerify = async () => {
      const userData = await verifyUser();
      updateCurrentUser(currentUser);
    }
    handleVerify()
  }, [])


  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData)
    updateCurrentUser(userData)
    history.push('/')
  }

  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData);
    updateCurrentUser(userData);
    history.push('/');
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    removeToken();
    updateCurrentUser(null);
    history.push('/');
  }
  return (
    <>
        <Layout 
          currentUser={currentUser}>
        <Switch>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/login'>
            <Login loginSubmit={loginSubmit}/>
          </Route>
          <MainContainer />
          </Switch>
          </Layout>
      </>
  )
}

export default App;
