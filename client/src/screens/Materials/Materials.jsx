import React from 'react'
import Layout from '../../layouts/Layout.jsx'

export default function Materials(props) {
  const {materials} = props
  console.log(props)

  return (
    <Layout>
      <h1>DIY Materials</h1>
      {materials.map((material) => (
         <div container='material-container'>
         <p>{material.name}</p>
          <img className='material-icon' src={material.imgURL} />
          </div>
       ))} 
    </Layout>
  )
}