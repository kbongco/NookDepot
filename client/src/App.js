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

    const handleVerify = async () => {
      const userData = await verifyUser();
      updateCurrentUser(userData);
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
    <div className='main'>
        <Layout 
        currentUser={currentUser}
        handleLogout={handleLogout}>
        <Switch>
          <Route path='/signup'>
            <SignUp registerSubmit={registerSubmit}/>
          </Route>
          <Route path='/login'>
            <Login loginSubmit={loginSubmit}/>
          </Route>
          <MainContainer currentUser={currentUser} />
          </Switch>
      </Layout>
      
      </div>
  )
}

export default App;
