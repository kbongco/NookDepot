import React from 'react';
import { Link } from 'react-router-dom';
import './Listings.css'

export default function Listings(props) {
  return (
    <>
      <h1 className='current-listings'>Check out the current Listings here!</h1>
      <h4>Want to add your listing? Go <Link to={`/listings/new`}>Here</Link></h4>
      
    </>
  )
}