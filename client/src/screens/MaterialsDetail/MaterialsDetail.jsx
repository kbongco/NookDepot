import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneMaterial } from "../../services/materials.js";

import './MaterialsDetail.css'

export default function MaterialsDetail(props) {
  const [material, updateMaterials] = useState("");
  const { id } = useParams();
  const { materials } = props;

  console.log(props);

  useEffect(() => {
    const fetchMaterial = async () => {
      const singleMaterial = await getOneMaterial(id);
      updateMaterials(singleMaterial);
    };
    fetchMaterial();
  }, []);

  return (
    <div className='materials-detail'>
      <img className="materials-detail-img" src={material.imgURL} />
      <div className='materials'>
      <h1>{material.name}</h1>
      <p>{material.notes}</p>
        <p>{material.season}</p>
        <button>Add to my listing</button>
      </div>
    </div>
  );
}
