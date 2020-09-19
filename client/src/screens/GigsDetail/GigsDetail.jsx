import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneGig } from "../../services/gigs.js";

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
    <div>
      <img className="gigs-img" src={gigs.imgURL} />
      <h1>{gigs.name}</h1>
      <p>Hemisphere: {gigs.hemisphere}</p>
      <p>Season Offered: {gigs.season}</p>
      <p>Fee offered:{gigs.fee}</p>
    </div>
  );
}
