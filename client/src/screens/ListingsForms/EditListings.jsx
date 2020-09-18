import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneListings } from '../../services/listings'

export default function EditListings(props) {
  const [formData, setFormData] = useState({
    name: "",
    links:""
  })

  const { name } = formData;
  const { links } = formData;
  const { id } = useParams();
  const { listings, updateSubmit } = props;

  useEffect(() => {
    const preFilForm = () => {
      const singleListing = listings.find(listing => listing.id === Number(id))
      setFormData({name: singleListing.name, link: singleListing.links})
    }
    if (listings.length) {
      preFilForm();
    }
  }, [listings])
  
  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ name: value})
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      updateSubmit(id,formData)
    }}>
      <h3>Edit your listing </h3>
      <label>
        Name:
         <input
          type='text'
          value={name}
          onChange={handleChange}
          />
      </label>
    </form>
  )
}