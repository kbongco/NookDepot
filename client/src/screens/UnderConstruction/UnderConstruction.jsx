import React from 'react';
import Layout from '../../layouts/Layout.jsx'
import './UnderConstruction.css'

export default function UnderConstruction() {
  return (
    <div className='underconstruction'>
    <h1>404! Not Found!</h1>
      <h2>This section of the site is 
      currently under construction.<br></br> 
      Click to go back to the home page
    </h2>
    <img className='construction' src="https://i.ibb.co/0q37sZf/construction.jpg"/>
      </div>
  )
}