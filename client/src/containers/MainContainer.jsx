import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "../screens/Home/Home.jsx";
import Listings from "../screens/Listings/Listings.jsx";
import AddListings from "../screens/ListingsForms/AddListings.jsx";
import EditListings from "../screens/ListingsForms/EditListings";
import Materials from "../screens/Materials/Materials";
import MaterialsDetail from "../screens/MaterialsDetail/MaterialsDetail";
import UnderConstruction from "../screens/UnderConstruction/UnderConstruction.jsx";
import Warning from "../screens/Warning/Warning";
import Gigs from "../screens/Gigs/Gigs";
import GigsDetail from '../screens/GigsDetail/GigsDetail'
import AddTownInfo from "../screens/AddTownInfo/AddTownInfo";
import UserInfo from "../screens/UserInfo/UserInfo";

import { getAllMaterials } from "../services/materials";
import { getAllGigs } from "../services/gigs";
import {
  getAllListings,
  postListings,
  putListings,
  deleteListings,
} from "../services/listings";
import {
  postTownInfo,
  getOneTownInfo,
  putTownInfo,
} from "../services/towninfo.js";


export default function MainContainer(props) {
  const [materials, updateMaterials] = useState([]);
  const [gigs, updateGigs] = useState([]);
  const [listings, updateListings] = useState([]);
  const [townInfo, updateTownInfo] = useState('');
  const history = useHistory();

  const { currentUser } = props

  const user_id = localStorage.getItem('userid')

  // const user_id = props.currentUser 
  // const { id } = user_id
  // console.log(id)
  
  // console.log(user_id);

  useEffect(() => {
    const fetchMaterials = async () => {
      const materialsArray = await getAllMaterials();
      updateMaterials(materialsArray);
    };
    const fetchGigs = async () => {
      const GigsArray = await getAllGigs();
      updateGigs(GigsArray);
    };

    const fetchListings = async () => {
      const ListingsArray = await getAllListings();
      updateListings(ListingsArray);
    };

    const fetchTowns = async () => {
      const TownsArray = await getOneTownInfo();
      updateTownInfo(TownsArray)
      
    }

    if (currentUser) {
      fetchGigs()
      fetchMaterials();
      fetchListings();
      fetchTowns();
    };

  }, [currentUser]);

  const createSubmit = async (formData) => {
    const newListing = await postListings(formData);
    updateListings((prevState) => [...prevState, newListing]);
  };
  const updateSubmit = async (id, formData) => {
    const updatedListings = await putListings(id, formData);
    updateListings((prevState) =>
      prevState.map((listings) =>
        listings.id === Number(id) ? updatedListings : listings
      )
    );
  };

  const handleDelete = async (id) => {
    await deleteListings(id);
    updateListings((prevState) =>
      prevState.filter((listing) => listing.id !== Number(id))
    );
    history.push("/listings");
  };

  const createSubmitTown = async ( formData) => {
    const newTownInfo = await postTownInfo(user_id,formData);
    updateTownInfo((prevState) => [...prevState, newTownInfo]);
    history.push('/users')
  };

  return (
    <Switch>
      <Route path="/listings/new">
        <AddListings createSubmit={createSubmit} />
      </Route>

      <Route path="/listings/:id/edit">
        <EditListings updateSubmit={updateSubmit} listings={listings} />
      </Route>

      <Route path="/listings">
        <Listings listings={listings} />
      </Route>

      <Route path='/gigs/:id' render={() => <GigsDetail gigs={gigs} />} />

      <Route path="/gigs">
        <Gigs  gigs={gigs} />
      </Route>

      <Route path="/materials/:id" render={()=>  <MaterialsDetail materials={materials} /> }/>
  

      <Route path="/materials">
        <Materials materials={materials} />
      </Route>

      <Route path="/warning/:id">
        <Warning listings={listings} handleDelete={handleDelete} />
      </Route>


      <Route path="/users/:user_id/towninfos">
        <AddTownInfo createSubmitTown={createSubmitTown} />
      </Route>

      <Route path="/users/:id">
      <UserInfo townInfo={townInfo} currentUser={currentUser}/>
      </Route>
      <Route path="/tools" component={UnderConstruction} />


      <Route path="/recipes" component={UnderConstruction} />
      
      <Route path="/garden" component={UnderConstruction} />

      <Route path="/" component={Home} />
    </Switch>
  );
}
