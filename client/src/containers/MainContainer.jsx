import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'
import Home from "../screens/Home/Home.jsx";
import Directory from '../screens/Directory/Directory.jsx'
import Materials from '../screens/Materials/Materials'
import UnderConstruction from "../screens/UnderConstruction/UnderConstruction.jsx";
import Warning from '../screens/Warning/Warning'
import Gigs from '../screens/Gigs/Gigs'

import { getAllMaterials } from '../services/materials'
import { getAllGigs } from '../services/gigs'


export default function MainContainer(props) {
  const [materials, updateMaterials] = useState([]);
  const [gigs, updateGigs] = useState([]);

  console.log(gigs)

  console.log(materials)
  useEffect(() => {
    const fetchMaterials = async () => {
      const materialsArray = await getAllMaterials();
      updateMaterials(materialsArray);
    }
    const fetchGigs = async () => {
      const GigsArray = await getAllGigs();
      updateGigs(GigsArray)
    }
    
    fetchGigs();
    fetchMaterials();
  }, [])



  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/directory' component={Directory}/>
      <Route path='/tools' component={UnderConstruction} />
      <Route path='/gigs' render={(props) => <Gigs{...props} gigs={gigs} />}/>
      <Route path='/garden' component={UnderConstruction} />
      <Route path='/materials' render={(props) => <Materials{...props} materials={materials}/>}/>
      <Route path='/recipes' component={UnderConstruction} />
      <Route path='/test' component ={Warning} />
    </Switch>
  )
}