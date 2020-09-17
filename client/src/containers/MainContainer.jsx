import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'
import Home from "../screens/Home/Home.jsx";
import Directory from '../screens/Directory/Directory.jsx'
import UnderConstruction from "../screens/UnderConstruction/UnderConstruction.jsx";


export default function MainContainer(props) {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/directory' component={Directory}/>
      <Route path='/tools' component={UnderConstruction} />
      <Route path='/garden' component={UnderConstruction} />
      <Route path='/DIY-Recipes' component={UnderConstruction} />
    </Switch>
  )
}