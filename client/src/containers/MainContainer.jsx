import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'
import Home from "../screens/Home/Home.jsx";
import Listings from '../screens/Listings/Listings.jsx'
import AddListings from '../screens/ListingsForms/AddListings.jsx'
import Materials from '../screens/Materials/Materials'
import MaterialsDetail from '../screens/MaterialsDetail/MaterialsDetail'
import UnderConstruction from "../screens/UnderConstruction/UnderConstruction.jsx";
import Warning from '../screens/Warning/Warning'
import Gigs from '../screens/Gigs/Gigs'

import { getAllMaterials } from '../services/materials'
import { getAllGigs } from '../services/gigs'
import { getAllListings } from '../services/listings'


export default function MainContainer(props) {
  const [materials, updateMaterials] = useState([]);
  const [gigs, updateGigs] = useState([]);
  const [listings, updateListings] = useState([])

  console.log(gigs)
  console.log(listings)

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

    const fetchListings = async () => {
      const ListingsArray = await getAllListings();
      updateListings(ListingsArray)
    }
    
    fetchGigs();
    fetchMaterials();
    fetchListings();
  }, [])



  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/listings' render ={(props) => <Listings{...props} listings={listings}/>} />
      <Route path='/listings/new' component={AddListings}/>
      <Route path='/tools' component={UnderConstruction} />
      <Route path='/gigs' render={(props) => <Gigs{...props} gigs={gigs} />}/>
      <Route path='/garden' component={UnderConstruction} />
      <Route path='/materials' render={(props) => <Materials{...props} materials={materials} />} />
      <Route path='/recipes' component={UnderConstruction} />
      <Route path='/test' component={Warning} />
      <Route path='/warning' component={Warning} />
    </Switch>
  )
}