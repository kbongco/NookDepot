import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from './layouts/Layout.jsx'
import MainContainer from './containers/MainContainer.jsx'
import './App.css';


function App() {
  return (
    <>
      <div>
        <Switch>
          <MainContainer />
        </Switch>
      </div>
      </>
  )
}

export default App;
