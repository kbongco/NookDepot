import React from "react";
import { Link } from 'react-router-dom'
import { getAllGigs } from "../../services/gigs";
import "./Gigs.css";

export default function Gigs(props) {
  const { gigs } = props;
  console.log(props);
  return (
    <>
      <div className="gigsparent-container">
        <h1 className="gigs">Here's some Gigs </h1>
        <br />
        {gigs.map((gig) => (
          <div className="gig-container">
            <p>{gig.name}</p>
            <img className="gig-icon" src={gig.imgURL} />
            <p>Hemiphere: {gig.hemisphere}</p>
            <Link to ={`/gigs/${gig.id}`}>
              <p>Details</p>
              </Link>
          </div>
        ))}
      </div>
    </>
  );
}
