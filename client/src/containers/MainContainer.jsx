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
import AddTownInfo from '../screens/AddTownInfo/AddTownInfo'
import UserTownInfo from '../screens/UserInfo/UserInfo'

import { getAllMaterials } from '../services/materials'
import { getAllGigs } from '../services/gigs'
import { getAllListings, postListings, putListings, deleteListings } from '../services/listings'
import { postTownInfo, getOneTownInfo, putTownInfo  } from '../services/towninfo.js'


export default function MainContainer(props) {
  const [materials, updateMaterials] = useState([]);
  const [gigs, updateGigs] = useState([]);
  const [listings, updateListings] = useState([])
  const [townInfo, updateTownInfo] = useState([])

  console.log(gigs)
  console.log(listings)
  console.log(townInfo)
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
    updateListings(prevState => prevState.map(listings => listings.id  === Number(id) ? updatedListings : listings))
  }

  const handleDelete = async (id) => {
    await deleteListings(id)
    updateListings(prevState => prevState.filter(listings => listings.id !== id))
  }

 

  


  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/listings' render={(props) => <Listings{...props} listings={listings} />} />

      <Route exact path='/listings/:id/edit'>
        <EditListings updateSubmit={updateSubmit} listings={listings}/>
      </Route>

      <Route path='/listings/new'><AddListings createSubmit={createSubmit} /></Route>
      
      <Route path='/tools' component={UnderConstruction} />
      <Route path='/gigs' render={(props) => <Gigs{...props} gigs={gigs} />}/>
      <Route path='/garden' component={UnderConstruction} />
      <Route path='/materials' render={(props) => <Materials{...props} materials={materials} />} />
      <Route exact path='/materials/:id' materials={materials} component={MaterialsDetail}></Route>
      <Route path='/recipes' component={UnderConstruction} />
      <Route path='/test' component={UserTownInfo}/>
      <Route path='/warning' component={Warning} handleDelete={handleDelete} listings={listings} />
      <Route path='/users/:id/addtownInfo'><AddTownInfo createSubmit/></Route>
    </Switch>
  )
}