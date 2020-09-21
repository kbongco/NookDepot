import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneMaterial } from "../../services/materials.js";

import './MaterialsDetail.css'

export default function MaterialsDetail(props) {
  const [material, updateMaterials] = useState("");
  const [shop, updateShop] = useState([]);
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

  const addToShop = (material) => {
    console.log('we added to our listing')
    updateShop([...shop, material]);
  }



  return (
    <div className='materials-detail'>
      <img className="materials-detail-img" src={material.imgURL} />
      <div className='materials'>
      <h1>{material.name}</h1>
      <p>{material.notes}</p>
        <p>{material.season}</p>
        <button onClick={() => addToShop(material)}>Add to my shop</button>
        <button>Add to my wish-list</button>
        <button>Go to your shop({shop.length})</button>
      </div>
    </div>
  );
}
