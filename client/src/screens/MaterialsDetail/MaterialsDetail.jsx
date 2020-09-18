import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getOneMaterial } from '../../services/materials.js'

export default function MaterialsDetail(props) { 
  const [material, updateMaterial] = useState(null);
  const [materialId, updateMaterialId] = useState('');
  const { id } = useParams();
  const { materials } = props
  console.log(props)

  useEffect(() => {
    const fetchMaterial = async () => {
      const oneMaterial = await getOneMaterial(id)
      updateMaterial(oneMaterial)
    }
    fetchMaterial();
  }, [])

  // const material = props.material.filter (material => material.material_id)


  return (
    <div>
      <img className='materials-img'
        src={materials.imgURL} />
      <h1>{materials.name}</h1>
      <p>{materials.notes}</p>
      <p>{materials.season}</p>

    </div>
  )
  
}
