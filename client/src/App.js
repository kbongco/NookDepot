import React from 'react';
import { Route, Switch } from 'react-router-dom'


import MainContainer from './containers/MainContainer.jsx'

import SignUp from './screens/SignUp/SignUp'
import Login from './screens/Login/Login'

import './App.css';


function App() {
  return (
    <>
      <div>
        <Switch>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <MainContainer />
        </Switch>
      </div>
      </>
  )
}

export default App;
