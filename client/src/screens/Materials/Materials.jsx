import React from 'react'
import Layout from '../../layouts/Layout.jsx'

import './Materials.css'

export default function Materials(props) {
  const {materials} = props
  console.log(props)

  return (
    <Layout>
      <div className='materialparent-container'>
      <h1 className='DIYmats'>DIY Materials</h1><br/>
      {materials.map((material) => (
         <div container='material-container'>
         <p className='material-name'>{material.name}</p>
          <img className='material-icon' src={material.imgURL} />
      </div>
      ))} 
      </div>
    </Layout>
  )
}