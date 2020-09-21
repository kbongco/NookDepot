import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneGig } from "../../services/gigs.js";

import './GigsDetail.css'

export default function GigsDetail(props) {
  const [gigs, updateGigs] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const fetchGigs = async () => {
      const singleGig = await getOneGig(id);
      updateGigs(singleGig);
      console.log(singleGig);
    };
    fetchGigs();
  }, []);

  return (
    <div className='gigs-detail'>
      <img className="gigs-detail-img" src={gigs.imgURL} />
      <div className='gigs-details'>
      <h1>{gigs.name}</h1>
      <p>Hemisphere: {gigs.hemisphere}</p>
      <p>Season Offered: {gigs.season}</p>
      <p>Fee offered:{gigs.fee}</p>
      </div>
    </div>
  );
}
