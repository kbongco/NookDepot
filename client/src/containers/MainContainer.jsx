import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'
import Home from "../screens/Home/Home.jsx";
import Listings from '../screens/Listings/Listings.jsx'
import AddListings from '../screens/ListingsForms/AddListings.jsx'
import EditListings from '../screens/ListingsForms/EditListings';
import Materials from '../screens/Materials/Materials'
import MaterialsDetail from '../screens/MaterialsDetail/MaterialsDetail'
import UnderConstruction from "../screens/UnderConstruction/UnderConstruction.jsx";
import Warning from '../screens/Warning/Warning'
import Gigs from '../screens/Gigs/Gigs'

import { getAllMaterials } from '../services/materials'
import { getAllGigs } from '../services/gigs'
import { getAllListings, postListings, putListings } from '../services/listings'


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

  const createSubmit = async (formData) => {
    const newListing = await postListings(formData)
    updateListings(prevState => [...prevState, newListing]);
  }
  const updateSubmit = async (id, formData) => {
    const updatedListings = await putListings(id, formData);
    listings(prevState => prevState.map(listings => listings.id  === Number(id) ? updatedListings : listings))
  }



  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/listings' render={(props) => <Listings{...props} listings={listings} />} />
      <Route exact path='/listings/:id/edit'>
        <EditListings listings={listings} updateSubmit={updateSubmit}/>
      </Route>
      <Route path='/listings/new' component={AddListings} createSubmit={createSubmit}/>
      <Route path='/tools' component={UnderConstruction} />
      <Route path='/gigs' render={(props) => <Gigs{...props} gigs={gigs} />}/>
      <Route path='/garden' component={UnderConstruction} />
      <Route path='/materials' render={(props) => <Materials{...props} materials={materials} />} />
      <Route exact path='/materials/:id' materials={materials} component={MaterialsDetail}></Route>
      <Route path='/recipes' component={UnderConstruction} />
      <Route path='/test' render={(props) => <MaterialsDetail{...props} materials={materials}/>} />
      <Route path='/warning' component={Warning} />
    </Switch>
  )
}