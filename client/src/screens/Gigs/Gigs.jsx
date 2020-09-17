import React from 'react'
import { getAllGigs } from '../../services/gigs'
import './Gigs.css'

export default function Gigs (props){
  const { gigs } = props 
  console.log(props)
  return (
    <>
      <div className='gigsparent-container'>
        <h1 className='gigs'>Here's some Gigs </h1><br />
        {gigs.map((gig) => (
          <div className='gig-container'>
            <p>{gig.name}</p>
            <img className='gig-icon' src={gig.imgURL}/>
            <p>Hemiphere: {gig.hemisphere}</p>
            <p>Details</p>
            </div>
        ))}
        </div>
          </>
  )
}