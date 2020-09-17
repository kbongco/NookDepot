import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'
import Home from "../screens/Home/Home.jsx";
import Directory from '../screens/Directory/Directory.jsx'
import Materials from '../screens/Materials/Materials'
import UnderConstruction from "../screens/UnderConstruction/UnderConstruction.jsx";
import Warning from '../screens/Warning/Warning'

import { getAllMaterials } from '../services/materials'


export default function MainContainer(props) {
  const [materials, updateMaterials] = useState([]);
  console.log(materials)
  console.log(props)
  useEffect(() => {
    const fetchMaterials = async () => {
      const materialsArray = await getAllMaterials();
      updateMaterials(materialsArray);
    }
    fetchMaterials();
  }, [])

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/directory' component={Directory}/>
      <Route path='/tools' component={UnderConstruction} />
      <Route path='/garden' component={UnderConstruction} />
      <Route path='/materials' render={(props) => <Materials{...props} materials={materials}/>}/>
      <Route path='/recipes' component={UnderConstruction} />
      <Route path='/test' component ={Warning} />
    </Switch>
  )
}