import React from 'react'
import { useParams, Link } from 'react-router-dom'


import './Materials.css'

export default function Materials(props) {
  const { materials } = props
  const { id } = useParams();
  console.log(props)

  return (
    <>
      <div className='materialparent-container'>
      <h1 className='DIYmats'>DIY Materials</h1><br/>
      {materials.map((material) => (
         <div container='material-container'>
         <p className='material-name'>{material.name}</p>
          <img className='material-icon' src={material.imgURL} />
          <Link to={`/materials/${id}`}><p>Details</p></Link>
      </div>
      ))} 
      </div>
    </>
  )
}