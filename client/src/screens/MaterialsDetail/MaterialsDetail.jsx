import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getOneMaterial } from '../../services/materials.js'

export default function MaterialsDetail(props) { 
  const [material, updateMaterial] = useState(null)
  const [materialId, updateMaterialId] = useState('')
  const { id } = useParams();

  const { materials } = props 


  useEffect(() => {
    const fetchMaterial = async () => {
      const singleMaterial = await getOneMaterial(id);
      updateMaterial(singleMaterial)
    }
    fetchMaterial()
  }, [])

  const handleChange = (e) => {
    const { value } = e.target;
    updateMaterialId(value)
  }

  return (
    <div>
      <h1>Hai</h1>
    </div>
  )
  
}
