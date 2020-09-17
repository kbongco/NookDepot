import React from 'react';
import Layout from '../../layouts/Layout.jsx'
import './Directory.css'

export default function Directory(props) {
  return (
    <Layout>
      <h1 className='current-listings'>Check out the current Listings here!</h1>
      <h4>Want to add your listing? Go Here</h4>
    </Layout>
  )
}