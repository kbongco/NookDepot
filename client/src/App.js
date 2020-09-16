import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from './layouts/Layout.jsx'
import Home from "./screens/Home/Home.jsx";
import './App.css';


function App() {
  return (
    <>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
      </>
  )
}

export default App;
