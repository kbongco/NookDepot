import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneMaterial } from "../../services/materials.js";

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
    <div>
      <img className="materials-img" src={material.imgURL} />
      <h1>{material.name}</h1>
      <p>{material.notes}</p>
      <p>{material.season}</p>
    </div>
  );
}
