import React from 'react';
import { Route, Switch } from 'react-router-dom'


import MainContainer from './containers/MainContainer.jsx'

import SignUp from './screens/SignUp/SignUp'
import './App.css';


function App() {
  return (
    <>
      <div>
        <Switch>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <MainContainer />
        </Switch>
      </div>
      </>
  )
}

export default App;
