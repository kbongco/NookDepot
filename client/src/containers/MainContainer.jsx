import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'
import Home from "../screens/Home/Home.jsx";
import Directory from '../screens/Directory/Directory.jsx'


export default function MainContainer(props) {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/directory' component={Directory}>

      </Route>
    </Switch>
  )
}